import { useEffect, useState } from "react";
import { consultarProdutosHttp } from "../../api/http/produtos.http";
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
      const res = await consultarProdutosHttp();
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