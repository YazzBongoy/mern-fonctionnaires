import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFonctionnaires } from "../../services/api";

export const fetchFonctionnaires = createAsyncThunk(
  "fonctionnaires/fetchAll",
  async () => {
    return await getFonctionnaires();
  }
);

const fonctionnaireSlice = createSlice({
  name: "fonctionnaires",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFonctionnaires.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFonctionnaires.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchFonctionnaires.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default fonctionnaireSlice.reducer;
