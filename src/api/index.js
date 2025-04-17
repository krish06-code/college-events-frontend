import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // or your backend URL

export const fetchEvents = () => API.get('/events');
export const addEvent = (newEvent) => API.post('/events', newEvent);
