import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4000',
});

export async function getYouTubeLinks() {
  const { data } = await api.get('/api/youtube-links');
  return data;
}
