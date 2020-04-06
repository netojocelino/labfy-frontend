import axios from 'axios';

const api = axios.create({
    baseURL: "/api/?key=index",
    timeout: 5 * 1000
});

export default api;

/*
"/api/?key=index/",
"https://api-labfy.000webhostapp.com?key=index",
'http://localhost:8000/api/public/cards',
*/