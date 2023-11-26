import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) throw new Error('Please provide a valid file path')
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            folder:"video-files",
            resource_type:"auto",
        })
        // file uploaded successfully
        console.log('File uploaded successfully on cloudinary 😎')
        console.log(response.url)
        return response;

    }catch(err){
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the operation got failed
    }
}


export { uploadOnCloudinary };
