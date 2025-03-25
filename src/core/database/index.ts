import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema';
import { migrations } from './migrations';
import { ProdutoDB } from './model/Produto.db';
import { ProdutoImagemDB } from './model/ProdutoImage.db';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: Platform.OS === 'ios' ? true : false,
});

export const database = new Database({
  adapter,
  modelClasses: [ProdutoDB, ProdutoImagemDB],
});


