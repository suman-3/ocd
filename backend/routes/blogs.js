import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { q } from '../utils/db.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

// Public
router.get('/', async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page?.toString() || '1', 10));
  const limit = Math.max(1, Math.min(100, parseInt(req.query.limit?.toString() || '10', 10)));
  const offset = (page - 1) * limit;

  const total = await q('SELECT COUNT(*)::int AS n FROM blogs', []);
  const rows = await q(
    `SELECT id, name, minute_read, date, created_at, updated_at
     FROM blogs
     ORDER BY date DESC, created_at DESC
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  res.json({ data: rows.rows, total: total.rows[0].n, page, pages: Math.ceil(total.rows[0].n / limit) });
});

router.get('/:id', async (req, res) => {
  const r = await q('SELECT * FROM blogs WHERE id=$1', [req.params.id]);
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json(r.rows[0]);
});

// Admin
router.post('/', authMiddleware, async (req, res) => {
  const {
    name, minute_read, date,
    rich_text1, image1, image2, rich_text2, video, rich_text3, conclusion
  } = req.body || {};
  if (!name || !minute_read || !date) return res.status(400).json({ error: 'name, minute_read, date are required' });

  const id = uuidv4();
  const r = await q(
    `INSERT INTO blogs
     (id, name, minute_read, date, rich_text1, image1, image2, rich_text2, video, rich_text3, conclusion)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
     RETURNING *`,
    [id, name, minute_read, date, rich_text1 || null, image1 || null, image2 || null,
     rich_text2 || null, video || null, rich_text3 || null, conclusion || null]
  );
  res.status(201).json(r.rows[0]);
});

router.patch('/:id', authMiddleware, async (req, res) => {
  const fields = [
    'name','minute_read','date','rich_text1','image1','image2','rich_text2','video','rich_text3','conclusion'
  ];
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
    `UPDATE blogs SET ${sets.join(', ')}, updated_at = now() WHERE id = $${values.length} RETURNING *`,
    values
  );
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json(r.rows[0]);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const r = await q('DELETE FROM blogs WHERE id=$1 RETURNING id', [req.params.id]);
  if (r.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

export default router;
