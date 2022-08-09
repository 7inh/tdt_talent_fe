// src/features/Login/LoginSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const checkExpiration = (user: any) => {
  return user.exp * 1000 < Date.now();
};

export interface LoginState {
  user: any;
  token: string | null;
}

const initialState: LoginState = {
  user: (() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return checkExpiration(user) ? {} : user;
  })(),
  token: (() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return checkExpiration(user) ? "" : localStorage.getItem("token") || "";
  })(),
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<any>) => {
      const token = action.payload.token;
      state.token = token;
      token && localStorage.setItem("token", token);
    },
    setUser: (state, action: PayloadAction<any>) => {
      const user = action.payload.user;
      state.user = user;
      user && localStorage.setItem("user", JSON.stringify(user));
    },
    removeLogin: (state) => {
      localStorage.setItem("user", "{}");
      localStorage.setItem("token", "");
      window.location.reload();
    },
  },
});

export const { setLogin, removeLogin, setUser } = LoginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default LoginSlice.reducer;
