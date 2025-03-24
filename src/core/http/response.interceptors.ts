import { AxiosError, AxiosResponse } from "axios";

// Configuração global para response de sucesso
export const successInterceptor = (response: AxiosResponse) => {
  return response;
}

// Configuração global para response de erro
export const errorInterceptor = (error: AxiosError) => {
  // adicionar log de erros / observabilidade

  if(!error.response) {
    return Promise.reject(error);
  }

  const { status } = error.response;

  // tratamento específico para status de erros
  if(status >= 500) {
    console.error('Tratamento de erros 5xx');
  }

  return Promise.reject(error);
}