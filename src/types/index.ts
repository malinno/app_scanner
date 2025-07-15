export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  roles: string[];
}

export interface Option {
  label: string;
  value: string | number;
} 