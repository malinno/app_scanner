import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { TailwindProvider } from 'nativewind'; // Nếu dùng nativewind v2+
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation/AppNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Nếu bạn dùng nativewind v2+, hãy bỏ comment dòng dưới */}
      {/* <TailwindProvider> */}
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      {/* </TailwindProvider> */}
    </SafeAreaProvider>
  );
} 