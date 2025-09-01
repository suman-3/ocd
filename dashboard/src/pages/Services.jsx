import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { listServices, createService, updateService, deleteService } from '../api';
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Stack,
  Typography,
  Divider,
  Grid,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import UploadButton from '../components/UploadButton';
import 'react-quill/dist/quill.snow.css';

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

  const handleEdit = (service) => {
    setEditing(service);
    setForm(service);
    setOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.description) {
      return alert('Name and Description are required.');
    }
    
    try {
      if (editing) {
        await updateService(editing.id, form);
      } else {
        await createService(form);
      }
      loadServices();
      handleClose();
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Error saving service. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id);
        loadServices();
      } catch (error) {
        console.error('Error deleting service:', error);
        alert('Error deleting service. Please try again.');
      }
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ align: [] }],
      ['image'],
      ['blockquote', 'code-block'],
    ],
  };

  const getMediaCount = (service) => {
    let count = 0;
    if (service.image_home) count++;
    if (service.media1) count++;
    if (service.media2) count++;
    return count;
  };

  const truncateText = (text, maxLength = 50) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const getMediaType = (url) => {
    if (!url) return null;
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'];
    const isVideo = videoExtensions.some(ext => url.toLowerCase().includes(ext));
    return isVideo ? 'video' : 'image';
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1">
          Services Management
        </Typography>
        <Button variant="contained" onClick={handleOpen} size="large">
          New Service
        </Button>
      </Stack>

      <Paper elevation={2}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell><strong>Service Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Content</strong></TableCell>
              <TableCell><strong>Media Files</strong></TableCell>
              <TableCell width={120}><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map(service => (
              <TableRow key={service.id} hover>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {service.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {truncateText(service.description, 60)}
                  </Typography>
                </TableCell>
                <TableCell>
                  {service.rich_text ? (
                    <Chip 
                      label="Has Content" 
                      color="success" 
                      size="small" 
                      variant="outlined"
                    />
                  ) : (
                    <Chip 
                      label="No Content" 
                      color="default" 
                      size="small" 
                      variant="outlined"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip 
                      label={`${getMediaCount(service)} files`} 
                      size="small"
                      color={getMediaCount(service) > 0 ? "primary" : "default"}
                    />
                    {service.image_home && (
                      <ImageIcon fontSize="small" color="action" />
                    )}
                    {(service.media1 || service.media2) && (
                      getMediaType(service.media1) === 'video' || getMediaType(service.media2) === 'video' ? (
                        <VideoFileIcon fontSize="small" color="action" />
                      ) : (
                        <ImageIcon fontSize="small" color="action" />
                      )
                    )}
                  </Stack>
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => handleEdit(service)}
                    color="primary"
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleDelete(service.id)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!services.length && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    No services created yet. Click "New Service" to get started.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h5">
            {editing ? 'Edit Service' : 'Create New Service'}
          </Typography>
        </DialogTitle>
        
        <DialogContent sx={{ mt: 1 }}>
          {/* Basic Information Section */}
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            Basic Information
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Service Name"
                fullWidth
                value={form.name || ''}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                helperText="Enter a clear, descriptive name for your service"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Short Description"
                fullWidth
                value={form.description || ''}
                onChange={e => setForm({ ...form, description: e.target.value })}
                required
                helperText="Brief description for listings and previews"
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Content Section */}
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            Detailed Content
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Service Details & Description
          </Typography>
          <Box sx={{ mb: 4 }}>
            <ReactQuill 
              value={form.rich_text || ''}
              onChange={(value) => setForm({ ...form, rich_text: value })}
              theme="snow"
              modules={quillModules}
              style={{ height: '250px', marginBottom: '50px' }}
              placeholder="Enter detailed information about your service..."
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Media Section */}
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            Media & Images
          </Typography>

          {/* Home Page Image */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Featured Image (Home Page)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            This image will be displayed on the home page and service listings
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <UploadButton 
              onUploaded={(url) => setForm({ ...form, image_home: url })}
            />
            <TextField 
              label="Featured Image URL" 
              fullWidth 
              value={form.image_home || ''} 
              onChange={e => setForm({ ...form, image_home: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </Stack>

          {/* Media 1 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Additional Media 1
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Upload images or videos to showcase your service
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <UploadButton 
              onUploaded={(url) => setForm({ ...form, media1: url })}
            />
            <TextField 
              label="Media 1 URL" 
              fullWidth 
              value={form.media1 || ''} 
              onChange={e => setForm({ ...form, media1: e.target.value })}
              placeholder="https://example.com/media.jpg or .mp4"
            />
          </Stack>

          {/* Media 2 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Additional Media 2
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Upload additional images or videos
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton 
              onUploaded={(url) => setForm({ ...form, media2: url })}
            />
            <TextField 
              label="Media 2 URL" 
              fullWidth 
              value={form.media2 || ''} 
              onChange={e => setForm({ ...form, media2: e.target.value })}
              placeholder="https://example.com/media.jpg or .mp4"
            />
          </Stack>
        </DialogContent>
        
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} size="large">
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleSave} 
            size="large"
            sx={{ minWidth: 120 }}
          >
            {editing ? 'Update Service' : 'Create Service'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
