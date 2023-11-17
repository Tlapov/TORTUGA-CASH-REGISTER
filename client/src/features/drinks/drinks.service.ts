import { fetchAPi } from "../../app/fetchAPI";

export const createDrink = async(data: any) => {
    return fetchAPi("/product", "POST", data);
};

export const getDrink = async() => {
    return fetchAPi("/product", "GET");       
};

export const deleteDrink = async(id: number) => {
    return fetchAPi(`/product/${id}`, "DELETE");
};