import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Produto, schema } from './schema';

const adapter = new SQLiteAdapter({
  schema,
  jsi: false,
});

const database = new Database({
  adapter,
  modelClasses: [Produto], 
});


