import React ,{ useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Data2 from '../../../Data/Data2';
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from '../../../Context/ThemeContext';
const ProdAll = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
    const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card,{    backgroundColor:activeColors.secondary,}]} onPress={() => navigation.navigate('ProductDetails', { itemId: item.id })}>
      <Image style={styles.image} resizeMode='contain' source={{ uri: item.image }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
        <View style={[styles.pricecontainer,{    backgroundColor: activeColors.secondary,}]}>
          <Text style={{ fontSize: 10,color:activeColors.txt }}>{item.title}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' ,color:activeColors.txt}}>{item.price}</Text>  
        </View>
        <Text style={{ fontSize: 15, fontWeight: '500',color:activeColors.txt }}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.main,{backgroundColor:activeColors.primary}]}>
    <FlatList
      data={Data2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    alignItems:'center',
    gap:15
   },
  card: {
    width: '48%',
    height: 290,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 9,
    gap: 15,
    margin:3,
    borderRadius:10
  },
  image: {
    height: 180,
    width: '100%',
    padding: 30,
  },
  pricecontainer: {
    height: 42,
    width: '70%',

    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },
});

export default ProdAll;
