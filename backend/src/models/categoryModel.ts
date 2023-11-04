import { Schema, model } from "mongoose";

interface ICategory {
    title: string;
    active: boolean;
}
  
export const categorySchema = new Schema<ICategory>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

export const CategoryModel = model<ICategory>('Category', categorySchema);