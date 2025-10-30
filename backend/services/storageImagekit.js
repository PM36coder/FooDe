import { imagekit } from "./imageKit.js"; 

export const uploadVideo = async (fileBuffer, fileName) => {
  try {
    const base64File = fileBuffer.toString('base64');


    const result = await imagekit.upload({
      file: base64File,   // base64 data here
      fileName: fileName,
      useUniqueFileName:true,
    });

    return result.url;  // return image URL
  } catch (error) {
    console.log("ImageKit Upload error:", error);
    throw error;
  }
};
