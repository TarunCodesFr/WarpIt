import rateLimiter from 'express-rate-limit';

export const limiter = rateLimiter({
	windowMs: 60 * 1000,
	max: 5,
	message: 'Too many requests',
	standardHeaders: true,
	legacyHeaders: false,
	handler: (req, res, next, options) => {
		console.log('Rate limit exceeded for IP:', req.ip);
		res.status(options.statusCode).send(options.message);
	},
});
