// src/features/Login/LoginSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LoginState {
  user: any;
  token: string;
}

const initialState: LoginState = {
  user: {},
  token: "",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<any>) => {
      state.user = {
        test: "abc",
      };
      state.token = action.payload.token;
    },
    removeLogin: (state, action) => {
      state = initialState;
    },
  },
});

export const { setLogin, removeLogin } = LoginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default LoginSlice.reducer;
