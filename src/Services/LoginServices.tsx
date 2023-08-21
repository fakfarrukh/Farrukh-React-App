// src/services/apiService.js
import axios from 'axios';

const baseURL = "https://localhost:44343/api"; // Replace with your API base URL

const apiService = axios.create({
  baseURL,
});

export const getPosts = () => {
  return apiService.get('/SignUp'); // Replace with your API endpoint
};

export const Signup = (FirstName:string,LastName:string,email:string,password:string) => {
  return apiService.post('/SignUp', { FirstName,LastName,email,password }); // Replace with your login endpoint
};

// Add more API calls as needed
