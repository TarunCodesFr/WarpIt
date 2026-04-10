import {ApiError} from '../../../error/ApiError';
import {prisma} from '../../../../packages/prisma';
import bcrypt from 'bcrypt';

export async function initUser(email: string, username: string, password: string) {
	const ifExistingUser = await prisma.users.findUnique({
		where: {
			email,
		},
	});

	if (ifExistingUser) {
		throw new ApiError(400, 'BAD_REQUEST', 'A user with this email already exists!');
	}

	try {
		const passwordHash = await bcrypt.hash(password, 10);

		const newUser = await prisma.users.create({
			data: {
				email,
				username,
				passwordHash,
			},
		});

		return newUser; //remove password from response
	} catch (error: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', 'We ran onto a issue creating your account, Try again Later.');
	}
}

export async function retrieveUser(email: string, password: string) {
	const ifExistingUser = await prisma.users.findUnique({
		where: {email},
	});

	if (!ifExistingUser) {
		throw new ApiError(400, 'BAD_REQUEST', 'A user with this email does not exist');
	}

	if (!ifExistingUser.passwordHash) {
		throw new ApiError(401, 'UNAUTHORIZED', 'No password set for this user (use Google OAuth)');
	}

	const comparePassword = await bcrypt.compare(password, ifExistingUser.passwordHash);

	if (!comparePassword) {
		throw new ApiError(401, 'UNAUTHORIZED', 'Email or password is wrong');
	}
	return ifExistingUser;
}
