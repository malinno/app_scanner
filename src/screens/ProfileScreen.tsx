import React from 'react';
import { View, Text } from 'react-native';
import { useUser } from '../hooks/useUser';

export default function ProfileScreen() {
  const user = useUser();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Thông tin cá nhân</Text>
      <Text className="text-lg mb-2">Username: {user?.username}</Text>
      <Text className="text-lg mb-2">Email: {user?.email || 'Chưa có'}</Text>
      <Text className="text-lg mb-2">Roles: {user?.roles?.join(', ')}</Text>
    </View>
  );
} 