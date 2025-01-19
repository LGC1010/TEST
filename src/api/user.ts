import axios from 'axios';
import { LoginUser, Profile, token, User } from '../types/type';

const API_URL = import.meta.env.VITE_API_URL;

export const userRequest = async (token: token) => {
  const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
};

export const loginRequest = async (userData: LoginUser) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const register = async (userData: User) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const upDateRequest = async ({ formData, userData }: Profile) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, userData);
  return response.data;
};
