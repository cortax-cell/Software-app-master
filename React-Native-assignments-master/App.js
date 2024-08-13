import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, createContext } from 'react';
import Gstart from './screens/Gstart';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Dashboard from './screens/Dashboard';
import TabNavigation from './screens/TabNavigation';
import Help from './screens/Help';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './screens/CartContext';


const Stack = createStackNavigator();

function StackNavigator() {
  

  return (
    
      <Stack.Navigator>
        <Stack.Screen name='GetStarted' component={Gstart} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={TabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name='Help' component={Help}/>
      </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

