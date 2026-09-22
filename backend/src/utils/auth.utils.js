import config from "../config/config.js";
import jwt from "jsonwebtoken";


const createAccessToken = ({userId, role}) => {
    const payload = { userId, role };
    return jwt.sign(payload, config.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
}


function createRefreshToken({userId, role}) {
    const refreshToken = jwt.sign(
        {userId, role}, 
        config.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});

    return refreshToken;
}

export default {createAccessToken, createRefreshToken};