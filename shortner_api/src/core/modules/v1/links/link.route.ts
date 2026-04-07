import { Router } from "express";
import { createRedirectLink, redirectToOriginalLink } from "./link.controller";

const router = Router();

router.post("/create-link", createRedirectLink);
router.get("/getlink/:shortCode", redirectToOriginalLink);

export default router;
