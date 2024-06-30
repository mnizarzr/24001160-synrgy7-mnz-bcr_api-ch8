import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { createCarRouter } from "./routes/cars.routes";
import CarHandler from "./handlers/car.handler";
import jwtStrategy from "./middlewares/jwt-strategy";
import passport from "passport";
import { createAuthRouter } from "./routes/auth.routes";
import AuthHandler from "./handlers/auth.handler";
import { createUserRouter } from "./routes/user.routes";
import UserHandler from "./handlers/user.handler";

import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import YAML from "yaml";
import path from "node:path";

const file = fs.readFileSync(path.resolve("openapi.yaml"), "utf8");
const swaggerDocument = YAML.parse(file);

function createServer() {
  const app = express();

  app.use(cors({ origin: true, credentials: true }))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  passport.use(jwtStrategy());

  app.use("/api/cars", createCarRouter(new CarHandler()));
  app.use("/api/auth", createAuthRouter(new AuthHandler()));
  app.use("/api/users", createUserRouter(new UserHandler()));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  return app;
}

export default createServer;
