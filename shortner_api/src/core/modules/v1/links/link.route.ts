import {Router} from 'express';
import {createCustomRedirectLink, createRedirectLink, redirectToOriginalLink} from './link.controller';
import {limiter} from '../../../../utils/rateLimiter';

const router = Router();
router.post('/create-link', limiter, createRedirectLink);
router.get('/getlink/:shortCode', limiter, redirectToOriginalLink);
router.post('/create-custom-link', limiter, createCustomRedirectLink);
export default router;
