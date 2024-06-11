import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>
  );
}