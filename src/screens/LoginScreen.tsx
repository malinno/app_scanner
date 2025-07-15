import React, { useState } from 'react';
import { View, Text, TextInput, Button as RNButton, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';

export default function LoginScreen() {
  const { login, loginLoading, loginError } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await login({ username, password });
  };

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">Đăng nhập</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 rounded-lg mb-3 px-3 py-2 text-base"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded-lg mb-3 px-3 py-2 text-base"
        secureTextEntry
      />
      {loginError && <Text className="text-red-500 mb-2 text-center">{loginError}</Text>}
      <Button title={loginLoading ? 'Đang đăng nhập...' : 'Đăng nhập'} onPress={handleLogin} loading={loginLoading} className="w-full" />
    </View>
  );
} 