import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
       try {
            const token = req.header("authorization").replace("Bearer ", "");
            const decryptedData = jwt.verify(token, process.env.JWT) as JwtPayload;
            req.body.userId = decryptedData.userId;
            next();
       } catch (error) {
            return res.send({
                success: false,
                message: error.message
            });
       } 
};