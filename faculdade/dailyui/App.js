import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {

  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aabbcc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
