import {limiter} from '../../../../utils/rateLimiter';
import {googleLoginProvider, loginUser, registerUser} from './auth.controller';
import {Router, Request, Response} from 'express';

const router = Router();

router.get('/test', limiter, (req: Request, res: Response) => {
	res.json({
		message: 'v1 working',
	});
	console.log('running');
});

router.post('/register', limiter, registerUser);
router.post('/login', limiter, loginUser);
router.get('/google/callback', limiter, googleLoginProvider);

export default router;
