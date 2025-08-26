import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import authRoutes from './routes/auth.js';
import serviceRoutes from './routes/services.js';
import blogRoutes from './routes/blogs.js';
import uploadRoutes from './routes/uploads.js';
import homepageLinksRouter from './routes/homepageLinks.js';
import { q } from './utils/db.js';
// DATABASE_URL=postgresql://uc2paq:xau_v1SUGl4YnesfkTmhEJbBP4THDzs4hJbo0@us-east-1.sql.xata.sh/ocd-design-studio:main?sslmode=require
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(helmet());
app.use(cors(
  {
    origin:"*",
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }
));
app.use(express.json({ limit: '30mb' }));

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(join(__dirname, uploadDir))) {
  fs.mkdirSync(join(__dirname, uploadDir), { recursive: true });
}

// app.use('/uploads', express.static(join(__dirname, uploadDir)));
app.use(
  '/uploads',
  express.static(join(__dirname, uploadDir), {
    setHeaders: (res) => {
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    }
  })
);

app.get('/health', (req, res) => res.json({ ok: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/blogs', blogRoutes);
app.use('/uploads', uploadRoutes);
app.use('/api', homepageLinksRouter);

// seed single admin on start (idempotent)
async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const pw = process.env.ADMIN_PASSWORD;
  if (!email || !pw) return;
  const r = await q('SELECT id FROM admins WHERE email=$1', [email]);
  if (r.rows.length === 0) {
    const hash = await bcrypt.hash(pw, 10);
    await q('INSERT INTO admins (id, email, password_hash) VALUES ($1,$2,$3)', [
      uuidv4(),
      email,
      hash,
    ]);
    console.log(`[seed] Admin created: ${email} / ${pw}`);
  }
}

const port = process.env.PORT || 4000;
seedAdmin()
  .then(() => {
    app.listen(port, () => {
      console.log(`API running at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error('Failed to seed admin:', e);
    process.exit(1);
  });
// const port = process.env.PORT || 4000;
// initDb()
//   .then(() => seedAdmin())
//   .then(() => {
//     app.listen(port, () => console.log(`API running at http://localhost:${port}`));
//   })
//   .catch((e) => {
//     console.error('Startup failed:', e);
//     process.exit(1);
//   });