import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// --- Auth ---
export async function login(email, password) {
  const { data } = await api.post("/auth/login", { email, password });
  return data; // { access_token }
}

// --- Upload ---
export async function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);
  const { data } = await api.post("/uploads", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.url;
}

// --- Services ---
export async function listServices() {
  const { data } = await api.get("/services");
  return data;
}

export async function getService(id) {
  const { data } = await api.get(`/services/${id}`);
  return data;
}

export async function createService(payload) {
  const { data } = await api.post("/services", payload);
  return data;
}

export async function updateService(id, payload) {
  const { data } = await api.patch(`/services/${id}`, payload);
  return data;
}

export async function deleteService(id) {
  const { data } = await api.delete(`/services/${id}`);
  return data;
}

// --- Blogs ---
export async function listBlogs(page = 1, limit = 10) {
  const { data } = await api.get(`/blogs?page=${page}&limit=${limit}`);
  return data; // { data, total, page, pages }
}

export async function getBlog(id) {
  const { data } = await api.get(`/blogs/${id}`);
  return data;
}

export async function createBlog(payload) {
  const { data } = await api.post("/blogs", payload);
  return data;
}

export async function updateBlog(id, payload) {
  const { data } = await api.patch(`/blogs/${id}`, payload);
  return data;
}

export async function deleteBlog(id) {
  const { data } = await api.delete(`/blogs/${id}`);
  return data;
}

// YouTube Links API
export async function getYouTubeLinks() {
  const { data } = await api.get("/api/youtube-links");
  return data;
}

export async function updateYouTubeLinks(links) {
  const { data } = await api.put("/api/youtube-links", links);
  return data;
}

export default api;
