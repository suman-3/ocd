import express from 'express';
import { q } from '../utils/db.js';

const router = express.Router();

// GET the YouTube links from the database
router.get('/youtube-links', async (req, res) => {
  try {
    const result = await q('SELECT * FROM homepage_links LIMIT 1');
    if (result.rows.length > 0) {
      return res.json(result.rows[0]);
    } else {
      return res.status(404).json({ message: 'No homepage links found.' });
    }
  } catch (err) {
    console.error('Error fetching homepage links:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// UPDATE YouTube links
router.put('/youtube-links', async (req, res) => {
  const { youtube_link1, youtube_link2, youtube_link3 } = req.body;

  // Ensure the links are provided
  if (!youtube_link1 || !youtube_link2 || !youtube_link3) {
    return res.status(400).json({ message: 'All 3 YouTube links are required.' });
  }

  try {
    const result = await q(
      `UPDATE homepage_links 
       SET youtube_link1 = $1, youtube_link2 = $2, youtube_link3 = $3, updated_at = now() 
       WHERE id = 1 RETURNING *`,
      [youtube_link1, youtube_link2, youtube_link3]
    );

    if (result.rowCount > 0) {
      return res.json({ message: 'YouTube links updated successfully', data: result.rows[0] });
    } else {
      return res.status(404).json({ message: 'Homepage links not found.' });
    }
  } catch (err) {
    console.error('Error updating YouTube links:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
