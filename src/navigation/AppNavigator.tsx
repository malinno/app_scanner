import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import AdminStack from './AdminStack';
import { useAuth } from '../hooks/useAuth';
import { usePermission } from '../hooks/usePermission';

export default function AppNavigator() {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = usePermission('admin');

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && isAdmin && <AdminStack />}
      {isAuthenticated && !isAdmin && <MainStack />}
    </NavigationContainer>
  );
} 