import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Gstart = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#2B2B52'}}>Welcome to app</Text>
        <Text style={{textAlign:'center',fontSize:20,color:'#2B2B52'}}>Find Your Most Loved Items Here</Text>
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.Lbtn} onPress={()=> navigation.navigate('Login')}>
            <Text style={{textAlign:'center',fontSize:17,color:'#2B2B52'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Sbtn} onPress={()=> navigation.navigate('Signup')}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Gstart
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#218F76',
    height:'100%',
    width:'100%',
  },
  subcontainer:{
    marginTop:'50%',
    backgroundColor:'#DAE0E2',
    height:'70%',
    width:'100%',
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderTopLeftRadius:60,
    borderTopRightRadius:60
  },
  btncontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:50
  },
  Lbtn:{
    backgroundColor:'#53E0BC',
    height:50,
    width:20,
    padding:8,
    borderRadius:99,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20
  },
  Sbtn:{
    backgroundColor:'#53E0BC',
    height:50,
    width:20,
    padding:8,
    borderRadius:99,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginRight:20
  },
})