import { appSchema, tableSchema } from "@nozbe/watermelondb";
import { ProdutoTableSchema } from "./model/Produto.db";
import { ProdutoImageTableSchema } from "./model/ProdutoImage.db";

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema(ProdutoTableSchema),
    tableSchema(ProdutoImageTableSchema),
  ],
});