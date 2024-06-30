import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

export async function cloudinaryUploader(
  file: string,
): Promise<UploadApiResponse> {
  return await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    use_filename: true,
    folder: "bcr",
  });
}
