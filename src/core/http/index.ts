import axios from 'axios';

import { JWTInterceptor } from './jwt.interceptor';
import { successInterceptor, errorInterceptor } from './response.interceptors';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 20000,
});

// configura interceptor de JWT
httpClient.interceptors.request.use(JWTInterceptor);

// configura interceptor global
httpClient.interceptors.response.use(
  successInterceptor,
  errorInterceptor
);