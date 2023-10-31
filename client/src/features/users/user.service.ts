import { fetchAPi } from "../../app/fetchAPI";

export const login = async(data: any) => {
    return fetchAPi("/user/login", "POST", data);
};

export const getUser = async() => {
    return fetchAPi("/user/getUser", "GET");       
};