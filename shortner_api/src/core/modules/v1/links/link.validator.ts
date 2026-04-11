import {z} from 'zod';

export const createCustomLinkSchema = z.object({
	originalUrl: z.string().url('Please enter a valid URL'),
	customUrlCode: z
		.string()
		.min(3, 'Short code must be at least 3 characters')
		.max(20, 'Short code cannot exceed 20 characters')
		.regex(/^[a-zA-Z0-9_-]+$/, 'Only letters, numbers, _ and - allowed'),
});
