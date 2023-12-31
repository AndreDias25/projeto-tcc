import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Routes from './src/View/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
