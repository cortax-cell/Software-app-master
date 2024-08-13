import { View, Text , Image, StyleSheet, TextInput,Button, TouchableOpacity, Alert } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { colors } from '../../../Theme/Theme';
import { ThemeContext } from '../../../Context/ThemeContext';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginChecked, setLoginChecked] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.isLoggedIn) {
          navigation.navigate('Home');
        }
      }
      setLoginChecked(true); 
    };
    checkLoggedIn();
  }, []);

  const handleLogin = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        console.log('Login successful');
        await AsyncStorage.setItem('user', JSON.stringify({ ...user, isLoggedIn: true }));
        navigation.navigate('Tab');
      } else {
        Alert.alert('Invalid Credentials');
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  if (!loginChecked) {
    return null; 
  }
  return (
    <View style={[styles.container,{backgroundColor:'#0A3D62'}]}>
        <View style={[styles.subContainer,{backgroundColor:activeColors.primary,}]}>
          <View>
            <Text style={{fontSize:27,fontWeight:'bold',textAlign:'center',color:activeColors.txt}}>Welcome Back</Text>
            <Text style={{fontSize:15,textAlign:'center',color:activeColors.txt}}>Enter your details below</Text>
          </View>
          <View>
          <TextInput 
                placeholder='Email'
                keyboardType="email-address" 
                value={email}
                onChangeText={setEmail}
                style={[styles.inputBox,{Color:activeColors.txt}]}
              />
          <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={[styles.inputBox,{Color:activeColors.txt}]}
              />
          </View>
          <View>
          <TouchableOpacity style={[styles.btn,{backgroundColor:activeColors.tertiary,}]} onPress={handleLogin}>
            <Text style={{textAlign:'center',color:activeColors.primary,fontSize:17}}>Log in</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center',marginTop:10}}>Forgot your password?</Text>
          </View>
          <Text style={{textAlign:'center',fontWeight:'400'}}>Or log in with</Text>
          <TouchableOpacity style={[styles.btn2,{backgroundColor:'#0A3D62'}]} onPress={()=>console.log("Button click")}>
            <Image source={require('./../../../assets/images/google.png')} style={styles.googleimg}/>
            <Text style={{textAlign:'center',color:'white',fontSize:16}}>Log in with Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.logmsg}>Don't have an account?</Text>
        <TouchableOpacity style={styles.btn3} onPress={()=> navigation.navigate('Signup')}>
            <Text style={{textAlign:'center',color:'#2C3335',fontSize:14}}>Get Started</Text>
          </TouchableOpacity>
    </View>
  )
}
export default Login;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },  
  loginImage:{
      width:'100%',
      height:'100%',
      position:'absolute'
    },
    subContainer:{
      padding:20,

      width:'100%',
      height:'60%',
      marginTop:-20,
      bottom:0,
      position:'absolute',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      flex:1,
      //alignItems:'center',
      justifyContent:'space-evenly'
    },
    inputBox:{
      Top:30,
      height: 40,
      borderColor: '#2B2B52',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    btn:{
      padding:15,

      borderRadius:99,
      //marginBottom:150
    },
    googleimg:{
      height:20,
      width:20
    },
    btn2:{
      padding:10,
      width:350,
      height:50,
      backgroundColor:'#EAF0F1',
      borderRadius:99,
      gap:10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'    
    },
    btn3:{
      opacity:0.6,
      left:140,
      bottom:375,
      padding:8,
      width:90,
      height:40,
      backgroundColor:'#EAF0F1',
      borderRadius:10,
      gap:10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row' 
  },
  logmsg:{
      opacity:0.6,
      left:14,
      bottom:347,
      color:'#EAF0F1',
  }
})