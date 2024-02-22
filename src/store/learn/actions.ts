import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFollowing as getFollowingApi,
  getForYou as getForYouApi,
  revealAnswer as revealAnswerApi,
} from "http/learn";

const GET_FOLLOWING = "learn/GET_FOLLOWING";
const GET_FOR_YOU = "learn/GET_FOR_YOU";
const REVEAL_ANSWER = "learn/REVEAL_ANSWER";

export const getFollowing = createAsyncThunk<any>(GET_FOLLOWING, async () => {
  const following = await getFollowingApi();
  return following;
});

export const getForYou = createAsyncThunk<any>(GET_FOR_YOU, async () => {
  const forYou = await getForYouApi();
  return forYou;
});

export const revealAnswer = createAsyncThunk<any, number>(
  REVEAL_ANSWER,
  async (id: number) => {
    const answer = await revealAnswerApi(id);
    return answer;
  },
);
