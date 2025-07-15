import { useUser } from './useUser';

export function usePermission(requiredRoles: string | string[]): boolean {
  const user = useUser();
  if (!user || !user.roles) return false;
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
  return roles.some(role => user.roles.includes(role));
} 