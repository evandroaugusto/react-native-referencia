import { create } from "zustand"
import { Produto } from "../models/Produto"

type State = {
  favoritados: Produto[],
  isLoading: boolean
}

type Actions = {
  favoritarProduto: (produto: Produto) => void,
  temFavoritado: (produto: Produto) => boolean,
  removerFavoritado: (produto: Produto) => void,
}

export const useProdutoStore = create<State & Actions>((set, get) => ({
  favoritados: [],
  isLoading: false,


  temFavoritado: (produto: Produto) => {
    return get().favoritados.some(item => item.id === produto.id)
  },

  removerFavoritado: (produto: Produto) => {
    const novaLista = get().favoritados.filter(item => item.id !== produto.id);

    set({
      favoritados: novaLista
    })
  },


  favoritarProduto: (produto: Produto) => {
    if (get().temFavoritado(produto)) {
      get().removerFavoritado(produto);
      return;
    }

    set(state => ({
      favoritados: [produto, ...state.favoritados]
    }))
  },
}));