import {
  ActionReducerMapBuilder,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";

import { getFollowing, getForYou, revealAnswer } from "./actions";
import { LearnState } from "./types";

const initialState: LearnState = {
  loading: false,
  error: false,
  following: undefined,
  forYou: undefined,
  answer: undefined,
};

const learnStore = createSlice({
  name: "learn",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<LearnState>) => {
    builder.addCase(getFollowing.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.following = payload;
    });

    builder.addCase(getForYou.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.forYou = payload;
    });

    builder.addCase(revealAnswer.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.answer = payload;
    });

    builder.addMatcher(
      isAnyOf(getFollowing.pending, getForYou.pending, revealAnswer.pending),
      (state) => {
        state.loading = true;
        state.error = false;
      },
    );

    builder.addMatcher(
      isAnyOf(getFollowing.rejected, getForYou.rejected, revealAnswer.rejected),
      (state, { error }) => {
        state.loading = false;
        state.error = error?.message || true;
      },
    );
  },
});

export default learnStore.reducer;
