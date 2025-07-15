import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Xin chào, {user?.username || 'User'}!</Text>
      <Button title="Đăng xuất" onPress={logout} className="w-40" />
    </View>
  );
} 