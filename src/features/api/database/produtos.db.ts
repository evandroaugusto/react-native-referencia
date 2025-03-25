import { database } from "@core/database"
import { ProdutoDB } from "@core/database/model/Produto.db";
import { ProdutoImagemDB } from "@core/database/model/ProdutoImage.db";
import { Produto } from "@features/models/Produto";

export const criarProdutoDB = async (produto: Produto) => {
  await database.write(async () => {
    await database.get<ProdutoDB>('products').create(post => {
      post.title = produto.title;
      post.thumbnail = produto.thumbnail;
      post.price = produto.price;
      post.description = produto.description;
    });

    const imagensCollection = database.get<ProdutoImagemDB>('products_images');
    const produtoImagens = produto.images || [];

    if (!produtoImagens.length) {
      return;
    }

    for (const image of produtoImagens) {
      await imagensCollection.create(imageDB => {
        imageDB.title = image;
        imageDB.produtoId = produto.id.toString()
      })
    }
  });
}

export const consultarProdutosDB = async () => {
  const produtos = await database.get<ProdutoDB>('products').query().fetch();
  return produtos;
}