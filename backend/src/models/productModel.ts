import { Schema, model } from "mongoose";

interface IProduct {
    title: string;
    price: number;
    quantity: number;
    category: Schema.Types.ObjectId;
    active: boolean;
}
  
export const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    quantity: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: true
    }
});

export const ProductModel = model<IProduct>('Product', productSchema);