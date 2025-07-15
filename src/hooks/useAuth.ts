import { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as authService from '../services/auth';
import useAppStore from '../store/useAppStore';
import type { User } from '../services/auth';

export function useAuth() {
  const { user, setUser } = useAppStore();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Đăng nhập
  const loginMutation = useMutation<User, any, authService.LoginPayload>({
    mutationFn: authService.login,
    onSuccess: (user) => {
      setUser(user);
      setError(null);
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: (err: any) => {
      setError(err?.response?.data?.message || 'Đăng nhập thất bại');
    },
  });

  // Lấy profile user (nếu đã đăng nhập)
  const { data: profile, isLoading: profileLoading } = useQuery<User, Error>({
    queryKey: ['profile'],
    queryFn: authService.getProfile,
    enabled: !!user,
  });

  // Khi profile thay đổi, cập nhật vào store
  useEffect(() => {
    if (profile) setUser(profile);
  }, [profile, setUser]);

  // Đăng xuất
  const logout = async () => {
    await authService.logout();
    setUser(null);
    queryClient.clear();
  };

  return {
    user: user || profile,
    isAuthenticated: !!(user || profile),
    login: loginMutation.mutateAsync,
    loginLoading: loginMutation.isPending,
    loginError: error,
    logout,
    profileLoading,
  };
} 