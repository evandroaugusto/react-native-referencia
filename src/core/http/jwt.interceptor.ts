import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../../features/store/auth.store";

export const JWTInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const { user } =  useAuthStore.getState();

  if(user?.accessToken) {
    config.headers['Authorization'] =  `Bearer ${user.accessToken}`;
  }

  return config;
};