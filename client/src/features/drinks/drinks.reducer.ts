import { createSlice } from "@reduxjs/toolkit";
import { getDrinkAction, createDrinkAction, deleteDrinkAction } from "./drinks.action";
import { ApiStatus } from "../../type/apiStatus.type";
import { IDrinkState } from "../../type/drink.type";

const initialState: IDrinkState = {
    data: [], 
    status: ApiStatus.ideal,
    message: ""
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getDrinkAction.pending, (state) => {
          state.status = ApiStatus.loading;
      });
      builder.addCase(getDrinkAction.fulfilled, (state, action) => {
          state.status =  !action.payload.success ? ApiStatus.error : ApiStatus.success;
          console.log(action.payload)
          state.data = action.payload.product;
          state.message = action.payload.message;
      });
      builder.addCase(getDrinkAction.rejected, (state) => {
          state.status = ApiStatus.error;
      });

      builder.addCase(createDrinkAction.pending, (state) => {
        state.status = ApiStatus.loading;
      });
      builder.addCase(createDrinkAction.fulfilled, (state, action) => {
      });
      builder.addCase(createDrinkAction.rejected, (state) => {
        state.status = ApiStatus.error;
      });

      builder.addCase(deleteDrinkAction.pending, (state) => {
        state.status = ApiStatus.loading;
      });
      builder.addCase(deleteDrinkAction.fulfilled, (state, action) => {
        if(!action.payload.success) {
          state.status = ApiStatus.error;
        }
        const newData = state.data.filter((x) => x._id !== action.payload);
        state.data = newData;
        state.status = ApiStatus.success;
      });
      builder.addCase(deleteDrinkAction.rejected, (state) => {
        state.status = ApiStatus.error;
      });
  }
});


export default drinkSlice.reducer;
