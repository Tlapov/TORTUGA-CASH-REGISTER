import { NavigateFunction } from "react-router-dom";
import { ApiStatus } from "./apiStatus.type";

export interface IUser{
    _id: string;
    userType: string;
    username: string;
    password: string;
    email?: string;
    phone?: number;
};
  
export interface IUserState {
    data: IUser | null;
    token: string | null;
    loginUserStatus: ApiStatus;
    getUserStatus: ApiStatus,
    message: string;
};

export interface ILoginUser {
    username: string;
    password: string;
};

export enum userRole {
    "employee",
    "taskmaster"
};

export interface ILoginActionUser {
    data: ILoginUser,
    navigate: NavigateFunction
}
  
// export interface IAddCustomer {
//     name: string;
//     surname: string;
//     email: string;
//     city: string;
//     date: string;
// };
  
// export interface IUpdateCustomer {
//     id: string;
//     data: IAddCustomer;
// };