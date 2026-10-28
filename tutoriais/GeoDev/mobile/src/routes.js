import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createNativeStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    headerBackButtonDisplayMode: 'minimal',
                    headerStyle: {
                        backgroundColor: '#FC7B6D'
                    }
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'Geo Dev' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: 'Perfil do GitHub' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
