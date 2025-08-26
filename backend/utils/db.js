// utils/db.js
import 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;

const connectionString =
  process.env.DATABASE_URL ||
  'postgres://postgres:postgres@localhost:5432/cms';

const useSSL =
  /sslmode=require/i.test(connectionString) ||
  String(process.env.DB_SSL || '').toLowerCase() === 'true';

const schema = (process.env.DB_SCHEMA || 'public').replace(/"/g, ''); // sanitize

export const pool = new Pool({
  connectionString,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
  max: 1,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 10000,
  statement_timeout: 20000,
  query_timeout: 20000,
});

// set search_path whenever a new connection is made
pool.on('connect', async (client) => {
  try {
    await client.query(`SET search_path TO "${schema}", public`);
  } catch (e) {
    console.warn('Could not set search_path:', e.message);
  }
});

export const q = (text, params) => pool.query(text, params);

// export async function initDb() {
//   // safe to leave as-is; with search_path set, these hit the right schema
//   await q(`
//     CREATE TABLE IF NOT EXISTS admins (
//       id UUID PRIMARY KEY,
//       email TEXT UNIQUE NOT NULL,
//       password_hash TEXT NOT NULL,
//       created_at TIMESTAMPTZ DEFAULT now(),
//       updated_at TIMESTAMPTZ DEFAULT now()
//     );
//   `);

//   await q(`
//     CREATE TABLE IF NOT EXISTS services (
//       id UUID PRIMARY KEY,
//       name TEXT NOT NULL,
//       description TEXT NOT NULL,
//       image_home TEXT,
//       media1 TEXT,
//       rich_text TEXT,
//       media2 TEXT,
//       created_at TIMESTAMPTZ DEFAULT now(),
//       updated_at TIMESTAMPTZ DEFAULT now()
//     );
//   `);

//   await q(`
//     CREATE TABLE IF NOT EXISTS blogs (
//       id UUID PRIMARY KEY,
//       name TEXT NOT NULL,
//       minute_read INT NOT NULL,
//       date DATE NOT NULL,
//       rich_text1 TEXT,
//       image1 TEXT,
//       image2 TEXT,
//       rich_text2 TEXT,
//       video TEXT,
//       rich_text3 TEXT,
//       conclusion TEXT,
//       created_at TIMESTAMPTZ DEFAULT now(),
//       updated_at TIMESTAMPTZ DEFAULT now()
//     );
//   `);
// }
