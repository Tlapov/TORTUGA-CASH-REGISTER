import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, getUserAction } from "./user.action";
import { IUserState } from "../../type/user.type";
import { ApiStatus } from "../../type/apiStatus.type";

const initialState: IUserState = {
    data: null, 
    token: localStorage.getItem("user"),
    loginUserStatus: ApiStatus.ideal,
    getUserStatus: ApiStatus.ideal,
    message: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(loginUserAction.pending, (state) => {
          state.loginUserStatus = ApiStatus.loading;
      });
      builder.addCase(loginUserAction.fulfilled, (state, action) => {
          !action.payload.success ? state.loginUserStatus = ApiStatus.error : state.loginUserStatus = ApiStatus.success;
          state.token = action.payload.token;
          state.message = action.payload.message;
      });
      builder.addCase(loginUserAction.rejected, (state) => {
          state.loginUserStatus = ApiStatus.error;
      });

      builder.addCase(getUserAction.pending, (state) => {
        state.getUserStatus = ApiStatus.loading;
      });
      builder.addCase(getUserAction.fulfilled, (state, action) => {
        if(!action.payload.success){
          state.getUserStatus = ApiStatus.error;
          state.token = null;
        }else{
          state.getUserStatus = ApiStatus.success;
        }
        state.data = action.payload.data;
        state.message = action.payload.message;
      });
      builder.addCase(getUserAction.rejected, (state) => {
        state.getUserStatus = ApiStatus.error;
      });
  }
});


export const getUserToken = (state: any) => state.user.data;
export default userSlice.reducer;
