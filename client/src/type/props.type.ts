import { INavItem } from "../helpers/NavItems";
import { ICategory } from "./category.type";

export interface propsNav {
    navItems: INavItem[]
};

export interface propsTable {
    data: any[];
    title?: string;
    isLoading?: boolean;
    deleteToggle?: any;
};