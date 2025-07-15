import axiosInstance from './axiosInstance';
import { setToken, removeToken, getToken } from '../utils/token';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  roles: string[]; // Thêm trường roles để kiểm tra quyền
  // Thêm các trường khác nếu cần
}

export interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (payload: LoginPayload): Promise<User> => {
  const res = await axiosInstance.post<LoginResponse>('/auth/login', payload);
  await setToken(res.data.token);
  return res.data.user;
};

export const logout = async () => {
  await removeToken();
};

export const getProfile = async (): Promise<User> => {
  const res = await axiosInstance.get<User>('/auth/profile');
  return res.data;
}; 