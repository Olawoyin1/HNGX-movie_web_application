import axios from 'axios';
import queryString from 'query-string';


import api from './api';

const axiosClient = axios.create({
    apiKey: 
    baseUrl: api.baseUrl,
    headers: {
        'Content-Type' : 'application/json'
    },
    
})