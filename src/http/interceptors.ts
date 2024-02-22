import http from "http/index";

export default {
  setup: (): void => {
    const addAuthorizationToken = async (config: any) => {
      config.headers = {
        ...(config.headers ?? {}),
      };

      return config;
    };

    http.interceptors.request.use(addAuthorizationToken);
  },
};
