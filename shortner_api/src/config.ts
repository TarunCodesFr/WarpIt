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
