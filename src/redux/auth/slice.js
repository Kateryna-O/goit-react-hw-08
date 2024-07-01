import { createSlice } from "@reduxjs/toolkit";
import {
  loginOperation,
  logoutOperation,
  refreshUser,
  registerOperation,
} from "./operations";
import toast from "react-hot-toast";

const initialstate = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  extraReducers: (builder) => {
    builder
      .addCase(registerOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerOperation.rejected, (state, { payload }) => {
        toast.error(payload.message || "Registration failed");
      })
      .addCase(loginOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginOperation.rejected, (state, { payload }) => {
        toast.error(payload.message || "Login failed");
      })
      .addCase(logoutOperation.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
