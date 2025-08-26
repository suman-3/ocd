import { Router } from 'express';
import multer from 'multer';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads')),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${Math.round(Math.random()*1e9)}${extname(file.originalname)}`)
});
const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('file'), (req, res) => {
  const base = process.env.PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 4000}`;
  const url = `${base}/uploads/${req.file.filename}`;
  res.json({ url });
});

export default router;
