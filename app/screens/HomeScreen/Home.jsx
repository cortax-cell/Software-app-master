import { View,Image, Text,StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React ,{useContext, useState}from 'react'
import { useNavigation } from '@react-navigation/native'
import Data from '../../../Data/Data'
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from '../../../Context/ThemeContext'

function Home() {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Softwares');
  return (
    <View>
      <ScrollView contentContainerStyle={styles.main} style={{backgroundColor:activeColors.primary}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding:15,gap:15}}>
          <View style={[styles.topcard , {backgroundColor:activeColors.tertiary}]}>
            <View style={styles.salecon}>
              <Text style={[styles.salemsg,{color:activeColors.primary}]}>Best Designing {'\n'}Software </Text>
              <TouchableOpacity style={[styles.salebtn,{backgroundColor:activeColors.primary}]}>
                <Text style={{color:activeColors.tertiary,fontWeight:'400'}}>50% Off</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../../../assets/images/saleimg-removebg-preview.png')} style={styles.saleimg}/>
          </View>
          <View style={[styles.topcard , {backgroundColor:activeColors.tertiary}]}></View>
          </ScrollView>

          <View style={styles.labhead}>
            <Text style={{fontSize:25,textAlign:'left',color:activeColors.txt}}>Categories</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('ProdAll')}>
              <Text style={{fontSize:15,textAlign:'center',color:activeColors.tertiary}}>See all</Text>
            </TouchableOpacity>
            
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.labels}>
          {['Softwares', 'PC Games', 'PS Games', 'Xbox Games', 'Gift Cards & Game Pass'].map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.btn1,{backgroundColor:activeColors.primary,borderColor:activeColors.txt,},
                selectedCategory === category && styles.selectedBtn && {backgroundColor:activeColors.tertiary,borderColor:activeColors.primary,}
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={{ color: selectedCategory === category ?  activeColors.primary: activeColors.txt }}>{category}</Text>
            </TouchableOpacity>
          ))}
          </ScrollView>

        
        <View style={[styles.prodlist,{backgroundColor:activeColors.primary}]} >
        {Data[selectedCategory]?.map(product => (
          <TouchableOpacity key={product.id} style={[styles.card,{backgroundColor: activeColors.secondary,}]} onPress={() => navigation.navigate('ProductDetails',{ itemId: product.id })}>
            <Image style={styles.image} resizeMode='contain' source={{uri: product.image}}/>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
              <View style={[styles.pricecontainer,{backgroundColor:activeColors.secondary,}]}>
                <Text style={{fontSize:10,color:activeColors.txt,}} numberOfLines={2} ellipsizeMode="tail">{product.title}</Text>
                <Text style={{fontSize:17,fontWeight:'bold',color:activeColors.txt,marginTop:10}}>{product.price}</Text>  
              </View>
              <Text style={{fontSize:15,fontWeight:'500',color:activeColors.txt,marginBottom:10,marginRight:5}}>⭐ {product.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
      
    </View>
  )
}
export default Home;
const styles = StyleSheet.create({
  main:{
    alignItems:'center',
    gap:15
  },
  topcard:{
    width: 350,
    height: 150,
    borderRadius: 20,
    justifyContent:'center',
    flexDirection:'row',
    gap:10,
  },
  salecon:{
    flexDirection:'column',
    justifyContent:'center',
    gap:15
  },
  salemsg:{
    marginLeft:70,
    fontSize:25,
    fontWeight:'500',
    // marginTop:20
  },
  salebtn:{
    marginLeft:70,
    height:40,
    width:90,
    padding:12,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'
  },
  saleimg:{
    height:'90%',
    resizeMode:'contain',
    width:130,
    marginRight:65,
    marginTop:16
    // backgroundColor:'black'
  },
  labhead:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-evenly',
    gap:190,
  },
  labels:{
    flexDirection:'row',
    gap:10,
    padding:8
  },
  btn1:{
    height:50,

    padding:12,

    borderWidth:2,
    borderRadius:10
  },
  selectedBtn:{
    height:50,

    padding:12,

    borderWidth:2,
    borderRadius:10
  },
  prodlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card:{
    marginBottom:8,
    width: '49%',
    height: 280,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding:10,
    gap:15,
    borderRadius:10
  },
  image:{
    marginTop:10,
    height:200,
    width:'100%',
    padding:30,
    resizeMode:'contain'
  },
  pricecontainer:{
    height:60,
    width:'70%',
    marginRight:8,
    marginBottom:15,
    justifyContent:'center',
    alignItems:'flex-start',
    gap:0,
    padding:2,
  }
})