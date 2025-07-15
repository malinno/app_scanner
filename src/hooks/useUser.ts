import useAppStore from '../store/useAppStore';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/auth';
import type { User } from '../services/auth';

export function useUser(): User | null {
  const { user } = useAppStore();
  const { data: profile } = useQuery<User, Error>({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: !user,
  });
  return user || profile || null;
} 