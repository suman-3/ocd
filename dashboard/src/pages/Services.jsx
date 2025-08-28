import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'; // Import Quill component
import { listServices, createService, updateService, deleteService } from '../api';
import { Button, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Paper, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UploadButton from '../components/UploadButton';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

export default function Services() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    image_home: '',
    media1: '',
    rich_text: '',
    media2: ''
  });

  // Load services from the backend
  const loadServices = async () => {
    const data = await listServices();
    setServices(data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleOpen = () => {
    setEditing(null);
    setForm({
      name: '',
      description: '',
      image_home: '',
      media1: '',
      rich_text: '',
      media2: ''
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    if (!form.name || !form.description) return alert('Name and Description are required.');
    if (editing) {
      await updateService(editing.id, form);
    } else {
      await createService(form);
    }
    loadServices();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deleteService(id);
      loadServices();
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>New Service</Button>
      
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Media</TableCell>
              <TableCell width={120}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map(service => (
              <TableRow key={service.id}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{service.image_home}</TableCell>
                <TableCell>{service.media1} | {service.media2}</TableCell>
                <TableCell>
                  <IconButton onClick={() => { setEditing(service); setForm(service); setOpen(true); }}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(service.id)}><DeleteIcon color="error" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!services.length && (
              <TableRow><TableCell colSpan={5} align="center">No services yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{editing ? 'Edit Service' : 'Create Service'}</DialogTitle>
        <DialogContent>
          <TextField label="Name" fullWidth sx={{ mb: 2 }} value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })} />
          <TextField label="Description" fullWidth sx={{ mb: 2 }} value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} />

          <TextField label="Rich Text" fullWidth sx={{ mb: 2 }} multiline value={form.rich_text || ''} onChange={e => setForm({ ...form, rich_text: e.target.value })} />

          {/* Quill Rich Text Editor */}
          <ReactQuill 
            value={form.rich_text || ''}
            onChange={(value) => setForm({ ...form, rich_text: value })}
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

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm({ ...form, image_home: url })} />
            <TextField label="Image URL (Home)" fullWidth value={form.image_home || ''} onChange={e => setForm({ ...form, image_home: e.target.value })} />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm({ ...form, media1: url })} />
            <TextField label="Media 1 URL" fullWidth value={form.media1 || ''} onChange={e => setForm({ ...form, media1: e.target.value })} />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton onUploaded={(url) => setForm({ ...form, media2: url })} />
            <TextField label="Media 2 URL" fullWidth value={form.media2 || ''} onChange={e => setForm({ ...form, media2: e.target.value })} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>{editing ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
