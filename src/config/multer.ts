import multer from "multer";

const storage = multer.memoryStorage();

const imageUpload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

export default imageUpload;
