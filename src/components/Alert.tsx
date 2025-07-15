import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
}

export default function Alert({ message, type = 'info', onClose }: AlertProps) {
  const bg =
    type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-600';

  return (
    <View className={`flex-row items-center p-3 rounded-lg m-2 ${bg}`}>
      <Text className="text-white flex-1 text-base">{message}</Text>
      {onClose && (
        <TouchableOpacity onPress={onClose} className="ml-2 p-1">
          <Text className="text-white text-xl font-bold">×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
} 