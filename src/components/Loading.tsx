import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

interface LoadingProps {
  text?: string;
}

export default function Loading({ text }: LoadingProps) {
  return (
    <View className="flex-1 justify-center items-center bg-transparent">
      <ActivityIndicator size="large" color="#2563eb" />
      {text && <Text className="mt-4 text-base text-blue-600 font-bold">{text}</Text>}
    </View>
  );
} 