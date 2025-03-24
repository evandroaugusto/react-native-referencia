import { appSchema, Model, tableSchema } from "@nozbe/watermelondb";

export class Produto extends Model {
  static table = 'produtos'; 

  // @ts-ignore
  @text('title') title: string; 
  // @ts-ignore
  @text('price') price: string;
  // @ts-ignore
  @text('description') description: string;
  // @ts-ignore
  @text('category') category: string;
  // @ts-ignore
  @text('thumbnail') thumbnail: string;
  // @ts-ignore
  @lazy images: string[];
}

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'produtos',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'price', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'thumbnail', type: 'string' },
        { name: 'images', type: 'string' },
      ],
    }),
  ],
});