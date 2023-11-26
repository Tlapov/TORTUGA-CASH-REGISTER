import { fetchAPi } from "../../app/fetchAPI";
import { ICategory } from "../../type/category.type";


export const getCategory = async() => {
    return fetchAPi("/category", "GET");       
};

export const createCategory = async(data: ICategory) => {
    return fetchAPi("/category", "POST", data);
};

export const updateCategory = async(id: string, data: ICategory) => {
    console.log(id, data)
    return fetchAPi(`/category/${id}`, "PATCH", data);
};

export const deleteCategory = async(id: number) => {
    return fetchAPi(`/category/${id}`, "DELETE");
};