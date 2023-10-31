import { RequestHandler, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const createUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const userExist = await UserModel.findOne({username: username});
        if(userExist) {
            return res.send({
                success: false,
                message: "User already exist" 
            });
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        req.body.userType = "employee";

        const user = await new UserModel(req.body);
        await user.save();

        return res.send({
            success: true,
            message: "User created" 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};

export const loginUser: RequestHandler = async(req: Request, res: Response) => {
    try{
        const {username, password} = req.body;
        const userExist = await UserModel.findOne({username: username});
        if(!userExist){
            return res.send({
                success: false,
                message: "Username or password is not valid"
            });
        };
    
        const validPassword = await bcrypt.compare(password, userExist.password);
        if(!validPassword){
            return res.send({
                success: false,
                message: "Username or password is not valid"
            });
        };
        const token = jwt.sign(
            {userId: userExist._id},
            process.env.JWT,
            {expiresIn: "12h"} 
        )
        return res.send({
            success: true,
            message: "User is created",
            token: token
        });

    }
    catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};

export const getUser: RequestHandler = async (req:Request, res: Response) => {
    try {
       const user = await UserModel.findOne({_id: req.body.userId});
       if(!user){
            return res.send({
                success: false,
                message: "Not authorazated"
            });
       };
       return res.send({
            success: true,
            message: "Get user succesfully",
            data: user
       });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        });
    };
};