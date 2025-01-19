import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stroe/userStore';

type LoginUser = { id: string; password: string };
type User = { id: string; password: string; nickname: string };

const API_URL = import.meta.env.VITE_API_URL;

const loginRequest = async (userData: LoginUser) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (res) => {
      alert('로그인 성공');
      login(res.accessToken);
      navigate('/');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error);
      console.log(error);
    }
  });
};

const register = async (userData: User) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const useJoinMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('/');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error);
    }
  });
};

const upDateRequest = async ({ formData, userData }) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, userData);
  return response.data;
};

export const useUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upDateRequest,
    onSuccess: (res) => {
      console.log(res);
      alert('수정 완료~');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error);
    }
  });
};
