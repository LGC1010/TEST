import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stroe/userStore';
import { token } from '../types/type';
import { loginRequest, register, upDateRequest, userRequest } from '../api/user';
import { UserKey } from './key/userKey';

export const useGetUser = (res: token) => {
  return useQuery({
    queryKey: [UserKey],
    queryFn: async () => await userRequest(res)
  });
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
      queryClient.invalidateQueries({ queryKey: [UserKey] });
    },
    onError: (error) => {
      alert(error);
      console.log(error);
    }
  });
};

export const useJoinMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('/');
      queryClient.invalidateQueries({ queryKey: [UserKey] });
    },
    onError: (error) => {
      alert(error);
    }
  });
};

export const useUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upDateRequest,
    onSuccess: (res) => {
      console.log(res);
      alert('수정 완료~');
      queryClient.invalidateQueries({ queryKey: [UserKey] });
    },
    onError: (error) => {
      alert(error);
    }
  });
};
