import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { APIStatus } from "../../shared/models/api-status";
import { getAllCharactersByPage } from "./characters-api";
import { CharactersState } from "./characters-model";

const STATE_NAME = "characters";

const INITIAL_STATE: CharactersState = {
  characters: [],
  currentPage: 0,
  status: APIStatus.IDLE,
  count: 0,
};

export const getAllByPageAsync = createAsyncThunk(
  `${STATE_NAME}/getAllByPage`,
  async (nextPage: number) => {
    const characters = await getAllCharactersByPage(nextPage);
    return { ...characters, currentPage: nextPage };
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: INITIAL_STATE,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllByPageAsync.pending, (state: { status: string }) => {
        state.status = APIStatus.LOADING;
      })
      .addCase(getAllByPageAsync.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.characters = action.payload.characters;
        state.count = action.payload.count;
        state.currentPage = action.payload.currentPage;
      })

      .addCase(getAllByPageAsync.rejected, (state) => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
