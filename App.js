import 'react-native-gesture-handler';
import React from 'react';
import Main from './components/MainComponent';
import Menu from './components/MenuComponent';
import Catering from './components/CateringComponent';
import About from './components/AboutUs';
import Events from './components/EventsComponent';
import Contact from './components/Contact';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{header: () => null}} component={ Main }  />
        <Stack.Screen name="Menu" options={{headerStyle: {backgroundColor: 'limegreen'}, headerTitleAlign: 'center' }} component={ Menu }  />
        <Stack.Screen name="Catering" options={{headerStyle: {backgroundColor: 'limegreen'}, headerTitleAlign: 'center' }} component={ Catering }  />
        <Stack.Screen name="About Us" options={{headerStyle: {backgroundColor: 'limegreen'}, headerTitleAlign: 'center' }} component={ About }  />
        <Stack.Screen name="Events" options={{headerStyle: {backgroundColor: 'limegreen'}, headerTitleAlign: 'center' }} component={ Events }  />
        <Stack.Screen name="Contact" options={{headerStyle: {backgroundColor: 'limegreen'}, headerTitleAlign: 'center' }} component={ Contact }  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


