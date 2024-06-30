import { Router } from "express";
import UserHandler from "../handlers/user.handler";
import authJwt from "../middlewares/passport-jwt";
import hasRoles from "../middlewares/has-roles";

export const createUserRouter = (handler: UserHandler) => {
  const router = Router();

  router
    .route("/")
    .get(authJwt, hasRoles(["superadmin", "admin"]), handler.getAllUsers)
    .post(authJwt, hasRoles(["superadmin"]), handler.postUser);

  router
    .route("/:id")
    .get(authJwt, hasRoles(["superadmin", "admin"]), handler.getUserById)
    .put(authJwt, hasRoles(["superadmin"]), handler.updateUserById)
    .delete(authJwt, hasRoles(["superadmin"]), handler.deleteUserById);

  return router;
};
