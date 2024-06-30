import { v2 } from "cloudinary";

const cloudinary = v2.config({
  cloud_name: "djepwirkq",
  api_key: "727892562266449",
  api_secret: "JflH0fIF5gM3JCytGeI04hJ1wB0",
  secure: true,
});

export { cloudinary as default, cloudinary }
