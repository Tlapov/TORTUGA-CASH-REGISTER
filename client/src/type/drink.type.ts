import { NavigateFunction } from "react-router-dom";
import { ApiStatus } from "./apiStatus.type";

export interface IDrink {
    _id: number;
    title: string;
    price: number;
    quantity: number;
    category: any;
    active: boolean;
};

export interface IDrinkState {
    data: IDrink[]
    status: ApiStatus;
    message: string;
}

export interface ICreateActionCategory {
    data: IDrink,
    navigate: NavigateFunction
};
