import {Request, Response} from 'express';
import {loginInput, registerInput} from './auth.validator';
import {ApiError} from '../../../error/ApiError';
import {initUser, retrieveUser} from './auth.service';
import {sendSuccess} from '../../../../utils/apiResponse';
import jwt from 'jsonwebtoken';
import {config} from '../../../../config';
import {googleProvider} from '../../../../packages/google';
import {prisma} from '../../../../packages/prisma';

export async function registerUser(req: Request, res: Response) {
	const validation = registerInput.safeParse(req.body);
	if (!validation.success) {
		throw new ApiError(400, 'BAD_REQUEST', 'Invalid Input');
	}

	try {
		const {email, username, password} = validation.data;

		const createdUser = await initUser(email, username, password);

		sendSuccess(
			res,
			{
				createdUser,
			},
			'Your account has been created!',
			200,
		);
	} catch (error: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', `We ran on to a error: ${error}`);
	}
}

export async function loginUser(req: Request, res: Response) {
	const validation = loginInput.safeParse(req.body);
	if (!validation.success) {
		throw new ApiError(400, 'BAD_REQUEST', 'Invalid Input');
	}

	try {
		const {email, password} = validation.data;
		const user = await retrieveUser(email, password);

		const token = jwt.sign({userId: user.id, userEmail: user.email}, config.JWT_SECRET!, {
			expiresIn: '3d',
		});

		sendSuccess(
			res,
			{
				token,
			},
			'You are now logged in',
			200,
		);
	} catch (error: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', error);
	}
}

export async function googleLoginProvider(req: Request, res: Response) {
	const code = req.query.code;
	if (typeof code !== 'string') {
		throw new ApiError(400, 'INVALID_CODE', 'Valid authorization is required!');
	}

	try {
		const googleResponse = await googleProvider.getToken(code);
		googleProvider.setCredentials(googleResponse.tokens);

		const userResponse = await fetch(
			`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`,
		);
		const userCreds = await userResponse.json();

		if (!userCreds.email || typeof userCreds.email !== 'string') {
			throw new ApiError(400, 'MISSING_EMAIL', 'No valid email returned from Google');
		}

		if (!userCreds.name || typeof userCreds.name !== 'string') {
			throw new ApiError(400, 'MISSING_NAME', 'No valid name returned from Google');
		}

		//const {email, name} = userCreds;
		const email = userCreds.email?.toString()?.trim();
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			throw new ApiError(400, 'INVALID_EMAIL', 'Invalid or missing email from Google');
		}

		const name = userCreds.name?.toString()?.trim();
		if (!name) {
			throw new ApiError(400, 'INVALID_NAME', 'Invalid or missing name from Google');
		}
		let user = await prisma.users.findUnique({
			where: {email},
		});

		if (!user) {
			let baseUsername = name.toLowerCase().replace(/[^a-z0-9]/g, '');
			let username = baseUsername;
			let counter = 1;

			while (await prisma.users.findUnique({where: {username}})) {
				username = `${baseUsername}${counter}`;
				counter++;
			}
			if (!email || typeof email !== 'string') {
				throw new ApiError(500, 'MISSING_EMAIL', 'Internal: email is null/undefined');
			}
			if (!username || typeof username !== 'string') {
				throw new ApiError(500, 'MISSING_USERNAME', 'Internal: username is null/undefined');
			}
			console.log('googleLoginProvider creating user with:', {email, username});
			user = await prisma.users.create({
				data: {
					email: email,
					username: username,
				},
			});
		}

		const token = jwt.sign({userId: user.id, userEmail: user.email}, config.JWT_SECRET!, {
			expiresIn: '3d',
		});

		sendSuccess(res, {token, user: {id: user.id, email: user.email, username: user.username}}, 'success', 200);
	} catch (err: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', `${err}`);
	}
}
