import { asyncHandling } from "../utils/asyncHandling.js";

const registerUser = asyncHandling(async(req,res,next) => {
    return res.status(200).json({
        message: "User registered successfully",
    });
})

export {registerUser};