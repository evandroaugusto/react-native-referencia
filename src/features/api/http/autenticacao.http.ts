import { httpClient } from "../../../core/http";
import { AuthToken } from "../../models/AuthToken";
import { AuthUser } from "../../models/AuthUser";

export const loginHttp = async (username:string, password: string) => {
  const res = await httpClient.post<AuthUser>('auth/login',{
    username,
    password,
    expiresInMins: 60
  });

  return res.data;
}

export const refreshToken = async (refreshToken: string) => {
  const res = await httpClient.post<AuthToken>('auth/refresh', {
    refreshToken
  });
  return res.data;
}