import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { listBlogs, createBlog, updateBlog, deleteBlog } from "../api";
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
  Pagination,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UploadButton from "../components/UploadButton";
import "react-quill/dist/quill.snow.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  "Cars",
  "Clean",
  "dealer",
  "Detailing",
  "Drive",
  "insurance",
  "Leather",
  "luxury",
  "News",
  "Paint",
  "Parts",
  "rent",
  "Rims",
  "sale",
  "Soap",
  "Tint",
  "travel",
  "Trends",
];

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    minute_read: 5,
    date: new Date().toISOString().split("T")[0],
    rich_text1: "",
    image1: "",
    image2: "",
    image3: "",
    rich_text2: "",
    video: "",
    tags: [],
    rich_text3: "",
    conclusion: "",
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
      name: "",
      minute_read: 5,
      date: new Date().toISOString().split("T")[0],
      rich_text1: "",
      image1: "",
      image2: "",
      image3: "",
      rich_text2: "",
      video: "",
      tags: [],
      rich_text3: "",
      conclusion: "",
    });
    setOpen(true);
  };

  const openEdit = (blog) => {
    setEditing(blog);
    setForm({
      ...blog,
      tags: blog.tags || [],
    });
    setOpen(true);
  };

  const close = () => setOpen(false);

  const handleSave = async () => {
    if (!form.name || !form.minute_read || !form.date)
      return alert("Name, Minute Read, and Date are required.");
    if (editing) {
      await updateBlog(editing.id, form);
    } else {
      await createBlog(form);
    }
    loadBlogs(page);
    close();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteBlog(id);
      loadBlogs(page);
    }
  };

  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setForm({
      ...form,
      tags: typeof value === "string" ? value.split(",") : value,
    });
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ align: [] }],
      ["image"],
      ["blockquote", "code-block"],
    ],
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Button variant="contained" onClick={openCreate}>
          New Blog
        </Button>
        <Pagination count={pages} page={page} onChange={(_, p) => setPage(p)} />
      </Stack>

      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Minute Read</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Images</TableCell>
              <TableCell width={120}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.name}</TableCell>
                <TableCell>{blog.minute_read}</TableCell>
                <TableCell>{blog.date}</TableCell>
                <TableCell>
                  {blog.tags && blog.tags.length > 0
                    ? blog.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))
                    : "No tags"}
                  {blog.tags && blog.tags.length > 3 && (
                    <Chip label={`+${blog.tags.length - 3} more`} size="small" />
                  )}
                </TableCell>
                <TableCell>
                  {[blog.image1, blog.image2, blog.image3].filter(Boolean).length} images
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => openEdit(blog)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(blog.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!blogs.length && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No blogs yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={close} fullWidth maxWidth="lg">
        <DialogTitle>{editing ? "Edit Blog" : "Create Blog"}</DialogTitle>
        <DialogContent sx={{ mt: 1 }}>
          {/* Basic Information Section */}
          <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
            Basic Information
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                label="Blog Title"
                fullWidth
                value={form.name || ""}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField
                label="Minute Read"
                type="number"
                fullWidth
                value={form.minute_read || 5}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    minute_read: parseInt(e.target.value, 10),
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField
                label="Date"
                type="date"
                fullWidth
                value={form.date || ""}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          {/* Tags Section */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tags</InputLabel>
            <Select
              multiple
              value={form.tags || []}
              onChange={handleTagChange}
              input={<OutlinedInput label="Tags" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Divider sx={{ my: 3 }} />

          {/* Content Section */}
          <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
            Content
          </Typography>

          {/* Rich Text 1 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Introduction Content
          </Typography>
          <Box sx={{ mb: 4 }}>
            <ReactQuill
              value={form.rich_text1 || ""}
              onChange={(value) => setForm({ ...form, rich_text1: value })}
              theme="snow"
              modules={quillModules}
              style={{ height: "200px", marginBottom: "50px" }}
            />
          </Box>

          {/* Rich Text 2 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Main Content
          </Typography>
          <Box sx={{ mb: 4 }}>
            <ReactQuill
              value={form.rich_text2 || ""}
              onChange={(value) => setForm({ ...form, rich_text2: value })}
              theme="snow"
              modules={quillModules}
              style={{ height: "200px", marginBottom: "50px" }}
            />
          </Box>

          {/* Rich Text 3 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Additional Content
          </Typography>
          <Box sx={{ mb: 3 }}>
            <ReactQuill
              value={form.rich_text3 || ""}
              onChange={(value) => setForm({ ...form, rich_text3: value })}
              theme="snow"
              modules={quillModules}
              style={{ height: "200px", marginBottom: "50px" }}
            />
          </Box>

          {/* Conclusion */}
          <TextField
            label="Conclusion"
            fullWidth
            multiline
            rows={3}
            sx={{ mb: 3 }}
            value={form.conclusion || ""}
            onChange={(e) =>
              setForm((f) => ({ ...f, conclusion: e.target.value }))
            }
          />

          <Divider sx={{ my: 3 }} />

          {/* Media Section */}
          <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
            Media Files
          </Typography>

          {/* Image 1 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Image 1
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <UploadButton
              onUploaded={(url) => setForm((f) => ({ ...f, image1: url }))}
            />
            <TextField
              label="Image 1 URL"
              fullWidth
              value={form.image1 || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, image1: e.target.value }))
              }
            />
          </Stack>

          {/* Image 2 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Image 2
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <UploadButton
              onUploaded={(url) => setForm((f) => ({ ...f, image2: url }))}
            />
            <TextField
              label="Image 2 URL"
              fullWidth
              value={form.image2 || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, image2: e.target.value }))
              }
            />
          </Stack>

          {/* Image 3 */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Image 3
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <UploadButton
              onUploaded={(url) => setForm((f) => ({ ...f, image3: url }))}
            />
            <TextField
              label="Image 3 URL"
              fullWidth
              value={form.image3 || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, image3: e.target.value }))
              }
            />
          </Stack>

          {/* Video */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Video
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <UploadButton
              onUploaded={(url) => setForm((f) => ({ ...f, video: url }))}
            />
            <TextField
              label="Video URL"
              fullWidth
              value={form.video || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, video: e.target.value }))
              }
            />
          </Stack>
        </DialogContent>
        
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={close} size="large">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave} size="large">
            {editing ? "Update Blog" : "Create Blog"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
