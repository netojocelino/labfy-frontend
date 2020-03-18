import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/public/cards',
  timeout: 5 * 1000
});

export default api;