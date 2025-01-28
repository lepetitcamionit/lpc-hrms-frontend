import { configureStore } from "@reduxjs/toolkit";
import userReducer from './pages/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
