import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
