import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stroe/userStore';
type loginUser = { id: string; password: string };

const API_URL = import.meta.env.VITE_API_URL;

const logins = async (userData: loginUser) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logins,
    onSuccess: (res) => {
      alert('로그인 성공');
      login(res.accessToken);
      navigate('/');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error);
      console.log(error);
      console.log(`${import.meta.env.VITE_API_URL}/login`);
      console.log(`${API_URL}`);
    }
  });
};
