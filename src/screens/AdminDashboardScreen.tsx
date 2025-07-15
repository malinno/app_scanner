import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';

export default function AdminDashboardScreen() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Admin Dashboard</Text>
      <Text className="text-lg mb-2">Xin chào, {user?.username || 'Admin'}!</Text>
      <Text className="text-base mb-4">Role: {user?.roles?.join(', ')}</Text>
      <Button title="Đăng xuất" onPress={logout} className="w-40" />
    </View>
  );
} 