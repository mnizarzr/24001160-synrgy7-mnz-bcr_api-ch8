import { Router } from "express";
import AuthHandler from "../handlers/auth.handler";
import authJwt from "../middlewares/passport-jwt";

export const createAuthRouter = (handler: AuthHandler) => {
  const router: Router = Router();

  router.post("/login", handler.postLogin);
  router.post("/logout", authJwt, handler.postLogout);
  router.post("/me", authJwt, handler.postMe);
  router.post("/register", handler.postRegister);

  return router;
};
