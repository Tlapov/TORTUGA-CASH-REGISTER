import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDrink, createDrink, deleteDrink } from "./drinks.service";
import { NavigateFunction } from "react-router-dom";
import { ICreateActionCategory } from "../../type/category.type";

export const getDrinkAction = createAsyncThunk(
    'drink/get',
    async () => {
      try{
        const response = await getDrink();
        return response;       
      }catch(error){
        return(error);
      };
    }
  );

export const createDrinkAction = createAsyncThunk(
    'drink/create',
    async ( {data, navigate} : ICreateActionCategory) => {
      try{
        const response = await createDrink(data);
        if(response.success){
          navigate("/kategorije-pica");
        };
        return response;
      }catch(error){
        return(error);
      }
    }
);


export const deleteDrinkAction = createAsyncThunk(
  'category/delete',
  async ( id : number) => {
    try{
      const response = await deleteDrink(id);
      return response;
    }catch(error){
      return(error);
    }
  }
);