import axios from 'axios';
import { API } from '../Constants';
const http = axios.create({
    //withCredentials: false,
    baseURL: `${'http://localhost:27629'}`, // 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'Cache-Control': 'no-cache',
      // Pragma: 'no-cache',
      //  Expires: '0'
    },
  });

  
  export const api = {
    get: (url, id) => http.get(url + id),
    getAll: (url) => http.get(url),
    post: (url, o) => http.post(url, o),
    put: (url, o, id) => http.put(`${url}${id || ''}`, o),
    delete: (url, id) => http.delete(url + id),
    deleteData: (url, data) => http.delete(url, { data }),
    getWithParam: (url, o) => http.get(url, o),
    //upload: (url, data) => httpMultiPart.post(url, data),
    getBlob: (url) => http.get(url, { responseType: 'blob' }),
  };

  export const user = {
    get: (url, id) => http.get(API.USER + url + id),
    getAll: (url) => http.get(API.USER + url),
    getMe: () => http.get(API.USER),
    post: ( o) => http.post(API.USER +  o),
    put: (url, o, id) => http.put(API.USER + url + id, o),
    delete: (url, id) => http.delete(API.USER + url + id),
    getWithParam: (url, o) => http.get(API.USER + url, o),
  };