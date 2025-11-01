import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    role: null,   // "user" or "partner"
    isAuthenticated: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  }
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
