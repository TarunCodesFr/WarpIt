import {ApiError} from '../../../error/ApiError';
import {generateUniqueShortCode} from '../../../../utils/shortCodeGenerator';
import {Request, Response} from 'express';
import {initNewUrl, retrieveOriginalLink} from './link.service';
import {sendSuccess} from '../../../../utils/apiResponse';
import {config} from '../../../../config';
import {prisma} from '../../../../packages/prisma';
import {createCustomLinkSchema} from './link.validator';

export async function createRedirectLink(req: Request, res: Response) {
	const {originalUrl} = req.body;

	if (!originalUrl) {
		throw new ApiError(200, 'BAD_REQUEST', 'Please enter a valid url first!');
	}

	const shortCode = await generateUniqueShortCode();

	try {
		const shortenUrl = await initNewUrl(originalUrl, shortCode);

		sendSuccess(res, {shortUrl: `${config.BASE_URL}/${shortCode}`}, 'Here is your Short Url', 200);
	} catch (error: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', error);
	}
}

export async function redirectToOriginalLink(req: Request, res: Response) {
	const shortCode = req.params.shortCode as string;
	if (!shortCode) {
		throw new ApiError(200, 'BAD_REQUEST', 'No URL Code is found!');
	}

	try {
		const originalLink = await retrieveOriginalLink(shortCode);
		// sendSuccess(res, {link: `${config.BASE_URL}/${shortCode}`, "Redirected Successfully!"})
		res.redirect(originalLink);
	} catch (error: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', error);
	}
}

export async function createCustomRedirectLink(req: Request, res: Response) {
	const result = createCustomLinkSchema.safeParse(req.body);

	// Check if validation failed
	if (!result.success) {
		const errors = result.error.errors.map((e: any) => e.message).join(', ');
		throw new ApiError(400, 'VALIDATION_ERROR', errors);
	}

	// Now access the validated data
	const {originalUrl, customUrlCode} = result.data;

	try {
		const fetchCustomCode = await prisma.link.findUnique({
			where: {
				shortCode: customUrlCode,
			},
		});

		if (!fetchCustomCode) {
			await initNewUrl(originalUrl, customUrlCode);
			sendSuccess(res, {shortUrl: `${config.BASE_URL}/${customUrlCode}`}, 'Here is your Short Url', 200);
		} else {
			throw new ApiError(409, 'CUSTOM_CODE_ALREADY_TAKEN', 'Unfortunately, This custom code is already taken');
		}
	} catch (err: any) {
		throw new ApiError(500, 'INTERNAL_SERVER_ERROR', err);
	}
}
