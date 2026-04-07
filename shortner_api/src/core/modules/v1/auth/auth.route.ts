import { loginUser, registerUser } from "./auth.controller";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({
    message: "v1 working",
  });
  console.log("running");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
