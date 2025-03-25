import { Model, Query } from "@nozbe/watermelondb";
import {
  text,
  children,
} from "@nozbe/watermelondb/decorators";

import { Associations } from "@nozbe/watermelondb/Model";
import { TableSchemaSpec } from "@nozbe/watermelondb/Schema";
import { ProdutoImagemDB } from "./ProdutoImage.db";


export const ProdutoTableSchema: TableSchemaSpec = {
  name: 'products',
  columns: [
    { name: 'id', type: 'string', isIndexed: true },
    { name: 'title', type: 'string' },
    { name: 'price', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'thumbnail', type: 'string' },
    { name: 'images', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
}

export class ProdutoDB extends Model {
  static table = 'products'; 
  static associations: Associations = {
    images: {type: 'has_many', foreignKey: 'product_id'}
  }
  
  @text('title') title!: string;
  @text('price') price!: string;
  @text('description') description!: string;
  @text('category') category!: string;
  @text('thumbnail') thumbnail!: string;

  @children('images') images!: Query<ProdutoImagemDB>;
}