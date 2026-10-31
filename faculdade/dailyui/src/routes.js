import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeScreen from './pages/HomeScreen'

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}