import React, { useState, useEffect } from 'react';
import { getYouTubeLinks, updateYouTubeLinks } from '../api';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function UpdateLinks() {
  const [links, setLinks] = useState({ youtube_link1: '', youtube_link2: '', youtube_link3: '' });

  useEffect(() => {
    async function fetchLinks() {
      const data = await getYouTubeLinks();
      setLinks(data);
    }
    fetchLinks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateYouTubeLinks(links);
      alert('YouTube links updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update links');
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Update YouTube Links</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="YouTube Link 1"
          fullWidth
          value={links.youtube_link1}
          name="youtube_link1"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="YouTube Link 2"
          fullWidth
          value={links.youtube_link2}
          name="youtube_link2"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="YouTube Link 3"
          fullWidth
          value={links.youtube_link3}
          name="youtube_link3"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">Update Links</Button>
      </form>
    </Box>
  );
}
