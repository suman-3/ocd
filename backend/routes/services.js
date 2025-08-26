import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { q } from '../utils/db.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

// Public
router.get('/', async (_req, res) => {
  const r = await q('SELECT * FROM services ORDER BY created_at DESC', []);
  res.json(r.rows);
});

router.get('/:id', async (req, res) => {
  const r = await q('SELECT * FROM services WHERE id=$1', [req.params.id]);
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json(r.rows[0]);
});

// Admin
router.post('/', authMiddleware, async (req, res) => {
  const { name, description, image_home, media1, rich_text, media2 } = req.body || {};
  if (!name || !description) return res.status(400).json({ error: 'name and description are required' });

  const id = uuidv4();
  const r = await q(
    `INSERT INTO services (id, name, description, image_home, media1, rich_text, media2)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
    [id, name, description, image_home || null, media1 || null, rich_text || null, media2 || null]
  );
  res.status(201).json(r.rows[0]);
});

router.patch('/:id', authMiddleware, async (req, res) => {
  const fields = ['name', 'description', 'image_home', 'media1', 'rich_text', 'media2'];
  const sets = [];
  const values = [];
  for (const f of fields) {
    if (f in req.body) {
      sets.push(`${f} = $${sets.length + 1}`);
      values.push(req.body[f]);
    }
  }
  if (!sets.length) return res.status(400).json({ error: 'No fields to update' });
  values.push(req.params.id);
  const r = await q(
    `UPDATE services SET ${sets.join(', ')}, updated_at = now() WHERE id = $${values.length} RETURNING *`,
    values
  );
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json(r.rows[0]);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const r = await q('DELETE FROM services WHERE id=$1 RETURNING id', [req.params.id]);
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

export default router;
