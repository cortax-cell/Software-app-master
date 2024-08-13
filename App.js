  import React, { useState ,useContext} from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, View } from 'react-native';
  import Login from './app/screens/LoginScreen/Login';
  import Signup from './app/screens/SignupScreen/Signup';
  import { NavigationContainer } from '@react-navigation/native';
  import TabNavigation from './app/screens/Navigations/TabNavigation';
  import { createStackNavigator } from '@react-navigation/stack';
  import 'react-native-gesture-handler';
  import Profile from './app/screens/ProfileScreen/Profile';
  import ProductDetails from './app/screens/ProdScreen/ProductDetails';
  import { ThemeContext } from './Context/ThemeContext';
  import ProdAll from './app/screens/ProdScreen/ProdAll';
  import CartScreen from './app/screens/CartScreen/CartScreen'
  import { CartProvider } from './Context/CartContext';
  import { colors } from './Theme/Theme';

  const Stack = createStackNavigator();
  
  function MyStack() {
    const { theme } = useContext(ThemeContext); 
    const activeColors = colors[theme.mode]
    return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:activeColors.primary},headerTitleStyle:{color:activeColors.txt},headerTintColor:activeColors.txt}}>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Tab"  component={TabNavigation}  options={{headerShown:false}}/>
        <Stack.Screen name="Profile"  component={Profile}  options={{headerShown:false}}/>        
        <Stack.Screen name="CartScreen" component={CartScreen} options={{title:'My Cart',headerTitleAlign:'center'}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerTransparent:true , title:''}}/>
        <Stack.Screen name="ProdAll" component={ProdAll} options={{headerTitle:'All Products',headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    );
  }

  export default function App() {
    const [theme, setTheme] = useState({ mode: 'light' });

  const updateTheme = () => {
    setTheme(prevTheme => ({
      mode: prevTheme.mode === 'dark' ? 'light' : 'dark'
    }));
  };

  return (
    <View style={styles.container}>
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        <CartProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
          <StatusBar style="auto" />
        </CartProvider>
      </ThemeContext.Provider>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
