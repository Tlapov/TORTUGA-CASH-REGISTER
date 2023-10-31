import { Schema, model } from "mongoose";

interface IUser {
    userType: string;
    username: string;
    password: string;
    email?: string;
    phone?: number;
}
  
export const userSchema = new Schema<IUser>({
    userType: {
        type: String,
        required: true,
        enum: ["employee", "taskmaster"]
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email:  String,
    phone:  Number
});

export const UserModel = model<IUser>('users', userSchema);