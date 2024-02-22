import { apiCall } from "../index";

export const getFollowing = (): Promise<any> =>
  apiCall({ method: "get", url: "/following" });

export const getForYou = (): Promise<any> =>
  apiCall({ method: "get", url: "/for_you" });

export const revealAnswer = (id: number): Promise<any> =>
  apiCall({ method: "get", url: `/reveal?id=${id}` });
