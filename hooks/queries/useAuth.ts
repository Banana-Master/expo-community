import { getMe, postLogin, postSignup } from '@/api/auth';
import queryClient from '@/api/queryClient';
import { removeHeader, setHeader } from '@/utils/header';
import { deleteSecureStore, saveSecureStore } from '@/utils/secureStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useEffect } from 'react';

const useGetMe = () => {
  const { data, isError } = useQuery({
    queryFn: getMe,
    queryKey: ['auth', 'getMe'],
  });

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      deleteSecureStore('accessToken');
    }
  }, [isError]);

  return { data };
};

const useSignup = () => {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      router.replace('/auth/login');
    },
    onError: () => {},
    onSettled: () => {},
  });
};

const useLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader('Authorization', `Bearer ${accessToken}`);
      await saveSecureStore('accessToken', accessToken);
      queryClient.fetchQuery({ queryKey: ['auth', 'getMe'] });
      router.replace('/');
    },
    onError: () => {},
    onSettled: () => {},
  });
};

export const useAuth = () => {
  const { data } = useGetMe();
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  const logout = () => {
    removeHeader('Authorization');
    deleteSecureStore('accessToken');
    queryClient.resetQueries({ queryKey: ['auth'] });
  };

  return {
    auth: {
      id: data?.id || '',
      nickname: data?.nickname || '',
    },
    loginMutation,
    signupMutation,
    logout,
  };
};
