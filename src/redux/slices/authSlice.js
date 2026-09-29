import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
  isRefreshing: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    },

    refreshFinish: (state) => {
      state.isRefreshing = false;
    },
  },
});

export const { login, logout, refreshFinish } = authSlice.actions;
export default authSlice.reducer;
