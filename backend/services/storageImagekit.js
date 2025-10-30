import { imagekit } from "./imageKit.js"; 

export const uploadVideo = async (file, fileName) => {
  try {
    const result = await imagekit.upload({
      file: file,   // base64 data here
      fileName: fileName,
    });

    return result.url;  // return image URL
  } catch (error) {
    console.log("ImageKit Upload error:", error);
    throw error;
  }
};
