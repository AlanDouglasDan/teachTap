import { useActionCreator } from "hooks";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "store/types";

import { getFollowing, getForYou, revealAnswer } from "./actions";
import { LearnHookReturn } from "./types";

export const useLearn = (): LearnHookReturn => {
  const learnState = useSelector(
    (state: RootState) => state.learn,
    shallowEqual,
  );

  return {
    ...learnState,
    getFollowing: useActionCreator(getFollowing),
    getForYou: useActionCreator(getForYou),
    revealAnswer: useActionCreator(revealAnswer),
  };
};
