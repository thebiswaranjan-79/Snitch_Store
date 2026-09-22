import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import authToken from "../utils/auth.utils.js";
import co from "cookie-parser";


export async function register(req, res) {
    const {email, name, password} = req.body;

    const isUserExist = await userModel.findOne({email});

    if(isUserExist){
        return res.status(400).json({
            message : "User already exists with this email address",
            errors: [
                {
                    field : "email",
                    message : "User already exists with this email address"
                }
            ]
        }); 
    }
   
    const user = await userModel.create({
        email,
        name,
        passwordHash : await bcrypt.hash(password, 12)
    });

    const refreshToken = authToken.createRefreshToken({
        userId : user._id,
        role : user.role
    });
    const accessToken = authToken.createAccessToken({
        userId : user._id,
        role : user.role
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });

    return res.status(201).json({
        message : "User Registered Successfully",
        data : {
            user : {
                _id : user._id,
                email : user.email,
                name : user.name
            },
            accessToken
      }
    });

}

