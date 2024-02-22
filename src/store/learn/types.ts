export interface LearnState {
  loading: boolean;
  error: boolean | string;
  following?: any;
  forYou?: any;
  answer?: any;
}

export interface LearnHookReturn extends LearnState {
  getFollowing: () => any;
  getForYou: () => any;
  revealAnswer: (id: number) => any;
}
