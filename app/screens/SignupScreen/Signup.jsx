import { View, Text , Image, StyleSheet, TextInput,Button, TouchableOpacity } from 'react-native'
import React,{useContext,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../../../Context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../../Theme/Theme';

export default function Signup() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]=useState("");
  const handleSignup = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ name,email, password, isLoggedIn: false }));
      console.log("Signup with:",email, password);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  return (
    <View style={[styles.container,{backgroundColor:'#0A3D62'}]}>
        
        <View style={[styles.subContainer,{backgroundColor:activeColors.primary,}]}>
          <View>
            <Text style={{fontSize:27,fontWeight:'bold',textAlign:'center',color:activeColors.txt}}>Get started free</Text>
            <Text style={{fontSize:15,textAlign:'center',color:activeColors.txt}}>Enter your details below</Text>
          </View>
          <View>
          <TextInput 
                placeholder='Name'
                keyboardType="Name" 
                value={name}
                onChangeText={setName}
                style={[styles.inputBox,{borderColor: activeColors.txt,}]}
              />
          <TextInput 
                placeholder='Email'
                keyboardType="email-address" 
                value={email}
                onChangeText={setEmail}
                style={[styles.inputBox,{borderColor: activeColors.txt,}]}
              />
          <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={[styles.inputBox,{borderColor: activeColors.txt,}]}
              />
          </View>
          <View>
          <TouchableOpacity style={[styles.btn,{backgroundColor:activeColors.tertiary,}]} onPress={handleSignup}>
            <Text style={{textAlign:'center',color:activeColors.primary,fontSize:17}}>Sign up</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center',marginTop:10,color:activeColors.txt}}>Signup with OTP</Text>
          </View>
          <Text style={{textAlign:'center',fontWeight:'400',color:activeColors.txt}}>Or Sign up with</Text>
          <TouchableOpacity style={[styles.btn2,{backgroundColor:'#0A3D62'}]} onPress={()=>console.log("Button click")}>
            <Image source={require('./../../../assets/images/google.png')} style={styles.googleimg}/>
            <Text style={{textAlign:'center',color:'white',fontSize:16}}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.logmsg}>Already have an account?</Text>
        <TouchableOpacity style={[styles.btn3,{backgroundColor:activeColors.same,}]} onPress={()=>console.log("Button click")}>
            <Text style={{textAlign:'center',color:'#2C3335',fontSize:16}}>Log in</Text>
          </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },  
  loginImage:{
      width:'100%',
      height:'100%',
      position:'absolute'
    },
    subContainer:{
      padding:20,

      width:'100%',
      height:'70%',
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
        width:80,
        height:40,

        borderRadius:10,
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row' 
    },
    logmsg:{
        opacity:0.6,
        left:12,
        bottom:347,
        color:'#EAF0F1',
    }
})