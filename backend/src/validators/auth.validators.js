import {body, validationResult} from "express-validator";

export const registerValidator =[
    body("email")
    .exists().withMessage("Email is Required").bail()
    .trim()
    .isEmail().withMessage("Email is Invalid"),

    body("name")
    .exists().withMessage("Name is Required").bail()
    .trim()
    .isLength({min: 3}).withMessage("Name must be at least 3 characters long"),

    body("password")
    .exists().withMessage("Password is Required").bail()
    .trim()
    .isLength({min: 6}).withMessage("Password must be at least 6 characters long"),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message : "Invalid Request",
                errors : errors.array()
            })
        }

        next();
    }


]