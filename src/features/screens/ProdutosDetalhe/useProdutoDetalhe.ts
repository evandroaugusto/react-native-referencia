import { useEffect, useState } from "react";
import { Produto } from "../../models/Produto";
import { consultarProdutoHttp } from "../../api/http/produtos.http";

export const useProdutoDetalhe = (produtoId: string) => {
  const [produto, setProduto ] = useState<Produto>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    carregarProduto();
  }, [])

  const carregarProduto = async () => {
    setIsLoading(true);

    try {
      const response = await consultarProdutoHttp(produtoId);
      setProduto(response)
    } catch(e) {
      console.error(e);
    }

    setIsLoading(false);
  }

  return {
    produto,
    isLoading
  }
}