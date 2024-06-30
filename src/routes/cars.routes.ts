import { Router } from "express";
import imageUpload from "../config/multer";
import CarHandler from "../handlers/car.handler";
import authJwt from "../middlewares/passport-jwt";
import hasRoles from "../middlewares/has-roles";

export const createCarRouter = (handler: CarHandler) => {
  const router = Router();

  router
    .route("/")
    .get(handler.getAllCars)
    .post(
      authJwt,
      hasRoles(["superadmin", "admin"]),
      imageUpload.single("image"),
      handler.postCar,
    );

  router
    .route("/:id")
    .get(handler.getCarById)
    .put(
      authJwt,
      hasRoles(["superadmin", "admin"]),
      imageUpload.single("image"),
      handler.updateCarById,
    )
    .delete(authJwt, hasRoles(["superadmin", "admin"]), handler.deleteCarById);

  return router;
};
