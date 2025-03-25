import { Model } from "@nozbe/watermelondb";
import { text } from "@nozbe/watermelondb/decorators";
import { TableSchemaSpec } from "@nozbe/watermelondb/Schema";

export const ProdutoImageTableSchema: TableSchemaSpec = {
  name: 'products_images',
  columns: [
    {name: 'url', type: 'string'},
    {name: 'product_id', type: 'string'}
  ]
}

export class ProdutoImagemDB extends Model {
  static table = 'produtos_imagens';

  @text('produto_id') produtoId!: string;
  @text('imagem') title!: string;
}