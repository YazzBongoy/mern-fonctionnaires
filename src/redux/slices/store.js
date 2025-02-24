import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import fonctionnaireReducer from "./slices/fonctionnaireSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fonctionnaires: fonctionnaireReducer,
  },
});
