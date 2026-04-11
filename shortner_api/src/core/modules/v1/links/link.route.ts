import {Router} from 'express';
import {createCustomRedirectLink, createRedirectLink, redirectToOriginalLink} from './link.controller';

const router = Router();

router.post('/create-link', createRedirectLink);
router.get('/getlink/:shortCode', redirectToOriginalLink);
router.post('/create-custom-link', createCustomRedirectLink);
export default router;
