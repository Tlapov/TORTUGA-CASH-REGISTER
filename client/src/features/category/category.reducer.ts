import { createSlice } from "@reduxjs/toolkit";
import { getCategoryAction, createCategoryAction, deleteCategoryAction } from "./category.action";
import { ApiStatus } from "../../type/apiStatus.type";
import { ICategoryState } from "../../type/category.type";

const initialState: ICategoryState = {
    data: [], 
    status: ApiStatus.ideal,
    message: ""
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getCategoryAction.pending, (state) => {
          state.status = ApiStatus.loading;
      });
      builder.addCase(getCategoryAction.fulfilled, (state, action) => {
          state.status =  !action.payload.success ? ApiStatus.error : ApiStatus.success;
          state.data = action.payload.category;
          state.message = action.payload.message;
      });
      builder.addCase(getCategoryAction.rejected, (state) => {
          state.status = ApiStatus.error;
      });

      builder.addCase(createCategoryAction.pending, (state) => {
        state.status = ApiStatus.loading;
      });
      builder.addCase(createCategoryAction.fulfilled, (state, action) => {
        state.status =  !action.payload.success ? ApiStatus.error : ApiStatus.success;
      });
      builder.addCase(createCategoryAction.rejected, (state) => {
        state.status = ApiStatus.error;
      });

      builder.addCase(deleteCategoryAction.pending, (state) => {
        state.status = ApiStatus.loading;
      });
      builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
        if(!action.payload.success) {
          state.status = ApiStatus.error;
        }
        const newData = state.data.filter((x) => x._id !== action.meta.arg);
        console.log(newData)
        state.data = newData;
        state.status = ApiStatus.success;
        state.message = action.payload.message
      });
      builder.addCase(deleteCategoryAction.rejected, (state) => {
        state.status = ApiStatus.error;
      });
  }
});


export default categorySlice.reducer;
