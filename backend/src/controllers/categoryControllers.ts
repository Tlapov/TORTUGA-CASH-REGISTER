import { RequestHandler, Request, Response } from "express";
import { CategoryModel } from "../models/categoryModel";

export const getCategory: RequestHandler = async (req:Request , res:Response ) => {
    try {        
        const category = await CategoryModel.find().exec();

        return res.send({
            success: true,
            message: "get category success",
            category: category 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};


export const createCategory: RequestHandler = async (req:Request , res:Response ) => {
    try {        
        const category = await new CategoryModel(req.body);
        await category.save();

        return res.send({
            success: true,
            message: "category created" 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};


export const updateCategory: RequestHandler = async (req:Request, res: Response) => {
    try {
        await CategoryModel.findByIdAndUpdate(req.params.id, req.body);

        return res.send({
            success: true,
            message: "Product updated" 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};

export const deleteCategory: RequestHandler = async (req:Request , res:Response ) => {
    try {
        console.log(req.params.id)        
        await CategoryModel.findByIdAndDelete(req.params.id);      
        return res.send({
            success: true,
            message: "category deleted" 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};