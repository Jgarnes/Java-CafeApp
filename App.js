import 'react-native-gesture-handler';
import React from 'react';
import Main from './components/MainComponent';
import Menu from './components/MenuComponent';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={ Main }  />
        <Stack.Screen name="Menu" component={ Menu }  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


