import { RequestHandler, Request, Response } from "express";
import { ProductModel } from "../models/productModel";

export const getProduct: RequestHandler = async (req:Request , res:Response ) => {
    try {        
        const product = await ProductModel.find().populate({ path: 'category', select: 'title' }).exec();

        console.log(product)

        return res.send({
            success: true,
            message: "get product success",
            product: product 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};

export const getProductByCategory: RequestHandler = async (req:Request , res:Response ) => {
    try {
        const product = await ProductModel.find({category: "6546c23df14ff066ec8b5371"});
        console.log(product)
        
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
}

export const createProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        await ProductModel.create(req.body);

        return res.send({
            success: true,
            message: "Product created" 
        });
       
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};

export const updateProduct: RequestHandler =async (req:Request, res: Response) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!product) {
            return res.send({
                success: false,
                message: "Something went wrong..." 
            });
        };
        
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

export const deleteProduct: RequestHandler = async (req:Request , res:Response ) => {
    try {        
        const product = await ProductModel.findByIdAndDelete(req.params.id, {new: true, runValidators: true});
        if(!product) { 
            return res.send({
                success: false,
                message: "Something went wrong..." 
            });
        };
        return res.send({
            success: true,
            message: "Product deleted"
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
};