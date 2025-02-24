import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

export const userLogin = createAsyncThunk("auth/login", async ({ email, password }) => {
  return await login(email, password);
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
