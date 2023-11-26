import { NavigateFunction } from "react-router-dom";
import { ApiStatus } from "./apiStatus.type";

export interface ICategory {
    _id?: string;
    title: string;
    active?: boolean;
};

export interface ICategoryState {
    data: ICategory[]
    status: ApiStatus;
    message: string;
}

export interface ICreateActionCategory {
    data: ICategory,
    navigate: NavigateFunction
};

export interface IUpdateActionCategory {
    id: string,
    data: ICategory,
    navigate: NavigateFunction
};