import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../services/axiosInstance';
import { setToken } from '../utils/token';

interface RefreshResponse {
  token: string;
}

export function useRefreshToken() {
  const refreshMutation = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post<RefreshResponse>('/auth/refresh');
      await setToken(res.data.token);
      return res.data.token;
    },
  });

  return {
    refresh: refreshMutation.mutateAsync,
    isLoading: refreshMutation.isPending,
    error: refreshMutation.error,
  };
} 