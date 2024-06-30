import { AddressInfo } from "net";
import createServer from "./src/app";
import { Model } from "objection";
import cloudinary from "./src/config/cloudinary";
import knexInstance from "./src/config/db";

(async () => {
  Model.knex(knexInstance);

  const { PORT = 3000, HOST = "127.0.0.1" } = process.env;

  console.log(cloudinary)
  const app = await createServer();
  const server = app.listen(+PORT, HOST, () => {
    const info = server.address() as AddressInfo;
    console.info(`Http server running on ${info.address}:${info.port}`);
  });

  process.on("SIGTERM", () => {
    console.debug("SIGTERM signal received: closing HTTP server");
    server.close(() => {
      console.debug("HTTP server closed");
    });
  });
})();
