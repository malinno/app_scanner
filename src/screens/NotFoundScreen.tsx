import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-7xl mb-6">🚫</Text>
      <Text className="text-2xl font-bold mb-3 text-red-500">404 - Không tìm thấy trang</Text>
      <Text className="text-base text-gray-600 text-center mb-6">Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</Text>
      <TouchableOpacity className="bg-blue-600 py-3 px-8 rounded-lg" onPress={() => navigation.navigate('Home' as never)}>
        <Text className="text-white text-base font-bold">Quay về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
} 