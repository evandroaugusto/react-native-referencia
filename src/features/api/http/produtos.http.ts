import { httpClient } from "../../../core/http";
import { Produto } from "../../models/Produto";

type ResponseProdutos = {
  products: Produto[],
  total: number,
  skip: number,
  limit: number
}

export const criarProdutoHttp = async (produto: Produto) => {
  return await httpClient.post(
    'products/add', produto
  );
}

export const consultarProdutosHttp = async () => {
  const select = 'id,title,price,description,category,thumbnail,images';
  const response = await httpClient.get<ResponseProdutos>(
    'products', {params: {select}}
  );
  
  return response.data.products;
}

export const consultarProdutoHttp = async (produtoId: string) => {
  return await httpClient.get<Produto>(`products/${produtoId}`).then(
    res => res.data
  );
}