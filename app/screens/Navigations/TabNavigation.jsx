import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../HomeScreen/Home';
import Search from '../SearchScreen/Search';
import { useContext } from 'react';
import Profile from '../ProfileScreen/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from '../../../Context/ThemeContext';
const Tab = createBottomTabNavigator();

function TabNavigation() {
  const navigation=useNavigation();
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  return (
    <Tab.Navigator screenOptions={{headerShown:true,headerStyle:{backgroundColor:activeColors.primary},tabBarActiveTintColor:activeColors.tertiary,tabBarActiveBackgroundColor:activeColors.primary,tabBarInactiveBackgroundColor:activeColors.primary}}>
        <Tab.Screen name="Discover" component={Home}  
        options={{headerTitleStyle:{color:activeColors.txt},
            tabBarLabel:({color})=>(
              <Text style={{color:activeColors.txt,fontSize:12,marginTop:-7}}>Home</Text>
            ),
            tabBarIcon:({color,size})=>( 
              <FontAwesome name="home" size={size} color={color}/>
            ),
            headerRight: () => (
              <Icon name="cart" size={29}  color={activeColors.tertiary}  style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('CartScreen')}
              />
            ),
          }}
        />
        <Tab.Screen name="Search" component={Search}
        options={{headerTitleStyle:{color:activeColors.txt},
            tabBarLabel:({color})=>(
              <Text style={{color:color,fontSize:12,marginTop:-7}}>Search</Text>
            ),
            tabBarIcon:({color,size})=>( 
              <FontAwesome name="search" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Profile" component={Profile}  
        options={{headerTitleStyle:{color:activeColors.txt},
            tabBarLabel:({color})=>(
              <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>( 
              <FontAwesome name="user-circle-o" size={size} color={color} /> 
            )
          }}
        />
    </Tab.Navigator>
  );
}
export default TabNavigation;