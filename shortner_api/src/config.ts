import dotenv from 'dotenv';
dotenv.config();

export const config = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: parseInt(process.env.API_PORT || '4000'),
	BASE_URL: process.env.WEB_URL || 'http://localhost:3000',
	JWT_SECRET: process.env.AUTH_SECRET,
	GOOGLE_ID: process.env.GOOGLE_PROVIDER_ID,
	GOOGLE_SECRET: process.env.GOOGLE_PROVIDER_SECRET,
} as const;

export const ERROR_MESSAGES = {
	INVALID_AUTH_CREDS: 'Invalid email or password',
	UNAUTHORIZED: 'You are not authorized to access this resource',

	USER_NOT_FOUND: 'User not found',
	USER_ALREADY_EXISTS: 'User with this email already exists',

	VALIDATION_ERROR: 'Invalid input data',
	MISSING_FIELDS: 'Required fields are missing',

	INTERNAL_ERROR: 'Internal server error',
	DATABASE_ERROR: 'Database connection error',
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;
