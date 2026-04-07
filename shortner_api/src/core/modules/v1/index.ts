import { Router } from "express";
import auth from "./auth/auth.route";
import link from "./links/link.route";

const router = Router();

router.use("/auth", auth);
router.use("/link", link);

export default router;
