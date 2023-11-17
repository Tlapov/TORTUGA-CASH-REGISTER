import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory, createCategory, deleteCategory } from "./category.service";
import { NavigateFunction } from "react-router-dom";
import { ICreateActionCategory } from "../../type/category.type";

export const getCategoryAction = createAsyncThunk(
    'category/get',
    async () => {
      try{
        const response = await getCategory();
        return response;       
      }catch(error){
        return(error);
      };
    }
  );

export const createCategoryAction = createAsyncThunk(
    'category/create',
    async ( {data, navigate} : ICreateActionCategory) => {
      try{
        const response = await createCategory(data);
        if(response.success){
          navigate("/admin/kategorije-pica");
        };
        return response;
      }catch(error){
        return(error);
      }
    }
);

export const deleteCategoryAction = createAsyncThunk(
  'category/delete',
  async ( id : any) => {
    try{
      const response = await deleteCategory(id);
      return response;
    }catch(error){
      return(error);
    }
  }
);