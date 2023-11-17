import { fetchAPi } from "../../app/fetchAPI";


export const getCategory = async() => {
    return fetchAPi("/category", "GET");       
};

export const createCategory = async(data: any) => {
    return fetchAPi("/category", "POST", data);
};

export const deleteCategory = async(id: any) => {
    return fetchAPi(`/category/${id}`, "DELETE");
};