const BASE_URL: string = "http://localhost:5500/api";

export const fetchAPi = async(url: string, method: string, payload?: any) => {
    try {
        const response = await fetch(`${BASE_URL + url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'authorization': localStorage.getItem("user") as string },
            body: JSON.stringify(payload)
        });       
        return await response.json();
    } catch (error) {
        return error;
    };
};  
