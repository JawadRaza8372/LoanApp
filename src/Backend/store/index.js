import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import data from "./dataSlice";
export const store = configureStore({
  reducer: { auth, data },
});
