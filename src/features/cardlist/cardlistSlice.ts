import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRobotsList } from "./cardlistAPI";

import { RootState } from "../../app/store";
import { Robot } from "../../model/robot.model";

export interface CardListState {
  robots: Robot[];
  status: "idle" | "loading" | "failed";
}

const initialState: CardListState = {
  robots: [],
  status: "idle",
};

export const fetchRobots = createAsyncThunk(
  "cardList/fetchRobots",
  async () => {
    const response = await getRobotsList();
    return response;
  }
);

export const cardListSlice = createSlice({
  name: "cardList",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRobots.pending, (state: { status: string }) => {
        state.status = "loading";
      })
      .addCase(
        fetchRobots.fulfilled,
        (state, action: PayloadAction<Robot[]>) => {
          state.status = "idle";
          state.robots = action.payload;
        }
      )
      .addCase(fetchRobots.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectRobots = (state: RootState) => state.cardList.robots;
export const selectStatus = (state: RootState) => state.cardList.status;

export default cardListSlice.reducer;
