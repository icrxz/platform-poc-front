import axios from 'axios';

const http = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') || ''
  }
});

export default http;