import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, login } from "./user.service";
import { ILoginActionUser } from "../../type/user.type";
import { NavigateFunction } from "react-router-dom";

export const getUserAction = createAsyncThunk(
    'user/getUser',
    async (navigate: NavigateFunction) => {
      try{
        const response = await getUser();
        if(!response.success){
          localStorage.clear();
          navigate("/login");
        };
        return response;       
      }catch(error){
        return(error);
      };
    }
  );

export const loginUserAction = createAsyncThunk(
    'user/login',
    async ( {data, navigate} : ILoginActionUser) => {
      try{
        const response = await login(data);
        if(response.success){
          localStorage.setItem("user", response.token);
          navigate("/employee");
        };
        return response;
      }catch(error){
        return(error);
      }
    }
);