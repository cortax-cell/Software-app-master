import { View, Text, StyleSheet, SafeAreaView, ScrollView ,Image, TouchableOpacity, Button } from 'react-native';
import React, { useContext, useState ,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalInfo } from '../App';
import { CartContext } from './CartContext';

const Dashboard = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('GetStarted'); 
    } catch (error) {
      console.error("Error clearing data", error);
      Alert.alert("Logout Error", "An error occurred while logging out.");
    }
  };

  const Data = [
    {
      "id": 1,
      "title": "PS5 Console",
      "price": '$49.99',
      "description": "Sony Playstation 5",
      "image": 'https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3'
    },
    {
      "id": 2,
      "title": "Sony Headphones",
      "price": '$14.99',
      "description": "Sony Playstation 5",
      "image": 'https://m.media-amazon.com/images/I/3147f-xzcIL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      "id": 3,
      "title": "PS5 Controllers",
      "price": '$9.99',
      "description": "Sony Playstation 5",
      "image": 'https://images-eu.ssl-images-amazon.com/images/I/418WzN0pPfL._AC_UL165_SR165,165_.jpg'
    },
    {
      "id": 4,
      "title": "Xbox Creeyas",
      "price": '$49.99',
      "description": "Microsoft Xbox",
      "image": 'https://th.bing.com/th/id/OIP.POR1_WwgnwAYIvPGJQ5VOQHaEK?w=332&h=186&c=7&r=0&o=5&pid=1.7'
    },
  ];
  const Data2 =[
    {
      "id": 5,
      "title": "Xbox Series X",
      "price": '$44.99',
      "description": "Microsoft Xbox",
      "image": 'https://th.bing.com/th/id/OIP.YXJ-h7nZF0qE485OQZvk5wHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7'
    },
    {
      "id": 6,
      "title": "PS4 Console",
      "price": '$39.99',
      "description": "Sony Playstation 4",
      "image": 'https://th.bing.com/th/id/OIP.UiYi2m0Une2Rw8jng6uA-AHaHa?w=193&h=192&c=7&r=0&o=5&pid=1.7'
    },
    {
      "id": 7,
      "title": "Nintendo Switch",
      "price": '$29.99',
      "description": "Nintendo Consoles",
      "image": 'https://th.bing.com/th/id/OIP.YiUrnLVoZdT4Yi8AWamLMwHaD4?w=347&h=180&c=7&r=0&o=5&pid=1.7'
    },
    {
      "id": 8,
      "title": "PS3 Console",
      "price": '$19.99',
      "description": "Sony Playstation 3",
      "image": 'https://th.bing.com/th/id/OIP.1sf1F8erLjQZ4U6WZ35NGgHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7'
    },
  
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Welcome Choose{'\n'}The Products {'\n'}You Like</Text>
        <View style={styles.container}>
          <View style={styles.leftarea}>
            <View style={styles.card1}>
              <Text style={{fontSize:40,fontWeight:'bold',color:'#DAE0E2',textAlign:'left',marginLeft:25}}>-20%</Text>
              <Text style={{fontSize:17,textAlign:'left',marginLeft:25,color:'#DAE0E2'}}>for the first order</Text>
            </View>
            {Data.map(item => (
              <View key={item.id} style={styles.card}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>{item.title}</Text>
                <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>{item.description}</Text>
                <TouchableOpacity style={styles.pricecontainer} onPress={() => addToCart(item)}>
                  <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>{item.price}</Text>
                  <Text style={{fontWeight:'bold',fontSize:30,marginRight:10,color:'#DAE0E2',textAlign:'center'}}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View> 
          <View style={styles.rightarea}>
            {Data2.map(item => (
              <View key={item.id} style={styles.card}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>{item.title}</Text>
                <Text style={{fontSize:15,fontWeight:100,color:'#DAE0E2',textAlign:'center'}}>{item.description}</Text>
                <TouchableOpacity style={styles.pricecontainer} onPress={() => addToCart(item)}>
                  <Text style={{fontSize:30,fontWeight:'bold',color:'#DAE0E2',textAlign:'center'}}>{item.price}</Text>
                  <Text style={{fontWeight:'bold',fontSize:30,marginRight:10,color:'#DAE0E2',textAlign:'center'}}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.card10} onPress={()=> navigation.navigate('Help')}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color:'white', textAlign: 'center' }}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={handleLogout} color="#ff4d4d" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#218F76',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 40,
  },
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 20,
    marginRight: 150,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 0,
  },
  leftarea: {
    width: '50%',
    height: 1050,
    gap: 5,
    alignItems: 'center',
  },
  rightarea: {
    width: '50%',
    height: 1500,
    gap: 6,
    alignItems: 'center',
  },
  card1: {
    backgroundColor: '#Ff0000',
    width: '97%',
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 500,
  },
  card: {
    backgroundColor: '#2C3335',
    width: '97%',
    height: 275,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 500,
  },
  card10: {
    backgroundColor: '#2C3335',
    width: '97%',
    height: 115,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 500,
  },
  image: {
    height: 150,
    width: 190,
    borderRadius: 20,
  },
  pricecontainer: {
    backgroundColor: '#99AAAB',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logoutContainer: {
    marginTop: 20,
  },
});
