import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'; // Import Quill component
import { listBlogs, createBlog, updateBlog, deleteBlog } from '../api';
import { Button, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Paper, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack, Pagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UploadButton from '../components/UploadButton';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: '',
    minute_read: 5,
    date: new Date().toISOString().split('T')[0],
    rich_text1: '',
    image1: '',
    image2: '',
    rich_text2: '',
    video: '',
    rich_text3: '',
    conclusion: ''
  });

  const loadBlogs = async (p = 1) => {
    const res = await listBlogs(p, 10);
    setBlogs(res.data);
    setPages(res.pages || 1);
  };

  useEffect(() => {
    loadBlogs(page);
  }, [page]);

  const openCreate = () => {
    setEditing(null);
    setForm({
      name: '',
      minute_read: 5,
      date: new Date().toISOString().split('T')[0],
      rich_text1: '',
      image1: '',
      image2: '',
      rich_text2: '',
      video: '',
      rich_text3: '',
      conclusion: ''
    });
    setOpen(true);
  };

  const openEdit = (blog) => {
    setEditing(blog);
    setForm(blog);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const handleSave = async () => {
    if (!form.name || !form.minute_read || !form.date) return alert('Name, Minute Read, and Date are required.');
    if (editing) {
      await updateBlog(editing.id, form);
    } else {
      await createBlog(form);
    }
    loadBlogs(page);
    close();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deleteBlog(id);
      loadBlogs(page);
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Button variant="contained" onClick={openCreate}>New Blog</Button>
        <Pagination count={pages} page={page} onChange={(_, p) => setPage(p)} />
      </Stack>

      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Minute Read</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Images</TableCell>
              <TableCell width={120}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map(blog => (
              <TableRow key={blog.id}>
                <TableCell>{blog.name}</TableCell>
                <TableCell>{blog.minute_read}</TableCell>
                <TableCell>{blog.date}</TableCell>
                <TableCell>{[blog.image1, blog.image2].filter(Boolean).join(', ')}</TableCell>
                <TableCell>
                  <IconButton onClick={() => openEdit(blog)}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(blog.id)}><DeleteIcon color="error" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!blogs.length && (
              <TableRow><TableCell colSpan={5} align="center">No blogs yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={close} fullWidth maxWidth="md">
        <DialogTitle>{editing ? 'Edit Blog' : 'Create Blog'}</DialogTitle>
        <DialogContent>
          <TextField label="Title" fullWidth sx={{ mb: 2 }} value={form.name || ''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <TextField label="Minute Read" type="number" fullWidth sx={{ mb: 2 }} value={form.minute_read || 5} onChange={e => setForm(f => ({ ...f, minute_read: parseInt(e.target.value, 10) }))} />
          <TextField label="Date (YYYY-MM-DD)" fullWidth sx={{ mb: 2 }} value={form.date || ''} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
          
          {/* Rich Text Editor for Text Fields */}
          <ReactQuill
            value={form.rich_text1 || ''}
            onChange={(value) => setForm({ ...form, rich_text1: value })}
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link'],
                [{ 'align': [] }],
                ['image'],
                ['blockquote', 'code-block']
              ]
            }}
            style={{ height: '300px', marginBottom: '20px' }}
          />
          <TextField label="Rich Text 1 (HTML)" fullWidth multiline sx={{ mb: 2 }} value={form.rich_text1 || ''} onChange={e => setForm(f => ({ ...f, rich_text1: e.target.value }))} />

          {/* Rich Text 2 and 3 with Quill editor */}
          <ReactQuill
            value={form.rich_text2 || ''}
            onChange={(value) => setForm({ ...form, rich_text2: value })}
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link'],
                [{ 'align': [] }],
                ['image'],
                ['blockquote', 'code-block']
              ]
            }}
            style={{ height: '300px', marginBottom: '20px' }}
          />
          <TextField label="Rich Text 2 (HTML)" fullWidth multiline sx={{ mb: 2 }} value={form.rich_text2 || ''} onChange={e => setForm(f => ({ ...f, rich_text2: e.target.value }))} />

          <ReactQuill
            value={form.rich_text3 || ''}
            onChange={(value) => setForm({ ...form, rich_text3: value })}
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link'],
                [{ 'align': [] }],
                ['image'],
                ['blockquote', 'code-block']
              ]
            }}
            style={{ height: '300px', marginBottom: '20px' }}
          />
          <TextField label="Rich Text 3 (HTML)" fullWidth multiline sx={{ mb: 2 }} value={form.rich_text3 || ''} onChange={e => setForm(f => ({ ...f, rich_text3: e.target.value }))} />

          <TextField label="Conclusion" fullWidth multiline sx={{ mb: 2 }} value={form.conclusion || ''} onChange={e => setForm(f => ({ ...f, conclusion: e.target.value }))} />
          
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm(f => ({ ...f, image1: url }))} />
            <TextField label="Image1 URL" fullWidth value={form.image1 || ''} onChange={e => setForm(f => ({ ...f, image1: e.target.value }))} />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm(f => ({ ...f, image2: url }))} />
            <TextField label="Image2 URL" fullWidth value={form.image2 || ''} onChange={e => setForm(f => ({ ...f, image2: e.target.value }))} />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm(f => ({ ...f, video: url }))} />
            <TextField label="Video URL" fullWidth value={form.video || ''} onChange={e => setForm(f => ({ ...f, video: e.target.value }))} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>{editing ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
