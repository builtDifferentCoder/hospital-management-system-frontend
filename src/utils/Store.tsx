import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from "../slices/JwtSlice";
import userReducer from "../slices/UserSlice";

export const store = configureStore({
  reducer: {
    jwt: jwtReducer,
    user: userReducer,
  },
});
