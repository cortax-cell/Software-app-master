
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalInfo } from '../App';

const Signup = () => {
  const navigation = useNavigation();
  const [name1, setName1] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ email, password, isLoggedIn: false }));
      console.log("Signup with:",email, password);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', color: '#2B2B52' }}>Get started free</Text>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#2B2B52' }}>Enter your details below</Text>
        </View>
        <View>
          <TextInput 
            placeholder='Name'
            value={name1} 
            onChangeText={setName1}
            style={[styles.inputBox, styles.inputBox1]}
          />
          <TextInput 
            placeholder='Email'
            keyboardType="email-address" 
            value={email}
            onChangeText={setEmail}
            style={styles.inputBox}
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
            style={styles.inputBox}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn3} onPress={() => navigation.navigate('Login')}>
        <Text style={{ textAlign: 'center', color: '#2C3335', fontSize: 14 }}>Log in</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
          <Text style={{ textAlign: 'center', color: '#DAE0E2', fontSize: 17 }}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Signup with OTP</Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  subContainer: {
    padding: 20,
    backgroundColor: '#218F76',
    width: '100%',
    height: '100%',
    marginBottom: '25%',
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputBox: {
    top: 30,
    height: 40,
    borderColor: '#2B2B52',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 60,
    borderRadius: 5,
  },
  inputBox1: {
    marginTop: 120,
  },
  btn: {
    height: 55,
    width: 130,
    padding: 15,
    backgroundColor: '#2B2B52',
    borderRadius: 99,
    marginTop: 530,
  },
  btn3: {
    opacity: 0.6,
    left: 140,
    marginBottom: 100,
    padding: 8,
    width: 80,
    height: 40,
    backgroundColor: '#EAF0F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
