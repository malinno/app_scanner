import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}

export default function Button({ title, onPress, loading, disabled, className, textClassName }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`bg-blue-600 py-3 px-6 rounded-lg items-center ${disabled ? 'opacity-50' : ''} ${className || ''}`}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={`text-white font-bold text-base ${textClassName || ''}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
} 