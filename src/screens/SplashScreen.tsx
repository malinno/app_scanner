import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-blue-600">
      {/* <Image source={require('@/assets/logo.png')} className="w-32 h-32 mb-6" /> */}
      <Text className="text-4xl font-bold text-white tracking-wider">App Scanner</Text>
    </View>
  );
} 