import { useEffect, useState } from "react";
import { consultarProdutosApi } from "../../api/http/produtos.http";
import { Produto } from "../../models/Produto";

export const useProdutos = () => {
  const [loading, setLoading ] = useState(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const res = await consultarProdutosApi();
      setProdutos(res)
    } catch (e) {
      console.error(e);
    }
    setLoading(false)
  }

  return {
    produtos,
    loading
  }
}