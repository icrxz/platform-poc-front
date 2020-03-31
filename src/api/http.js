import axios from 'axios';

const http = axios.create({
  baseURL: '/api/v1',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default http;