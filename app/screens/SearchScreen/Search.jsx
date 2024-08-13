import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import Data2 from '../../../Data/Data2'; // Ensure this path is correct
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from '../../../Context/ThemeContext';
function Search({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  const [svalue, setSValue] = useState('');
  const [filteredData, setFilteredData] = useState(Data2);

  const handleSearch = () => {
    const filtered = Data2.filter(item => item.title.toLowerCase().includes(svalue.toLowerCase()));
    setFilteredData(filtered);
    
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card,{backgroundColor: activeColors.secondary,}]} onPress={() => navigation.navigate('ProductDetails', { itemId: item.id })}>
      <Image style={styles.image} resizeMode='contain' source={{ uri: item.image }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
        <View style={[styles.pricecontainer,{backgroundColor:activeColors.secondary,}]}>
        <Text style={{fontSize:10,color:activeColors.txt,}} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
        <Text style={{fontSize:17,fontWeight:'bold',color:activeColors.txt,marginTop:0}}>{item.price}</Text>  
        </View>
        <Text style={{fontSize:15,fontWeight:'500',color:activeColors.txt}}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.main,{backgroundColor:activeColors.primary}]}>
      <View style={styles.container}>
        <TextInput 
          placeholder='Search'
          placeholderTextColor={activeColors.txt}
          value={svalue}
          onChangeText={setSValue}
          style={[styles.inputBox,{borderColor: activeColors.txt,color:activeColors.txt,}]}
        />
        <TouchableOpacity style={[styles.search,{backgroundColor: activeColors.tertiary,}]} onPress={handleSearch}>
          <Text style={{ color: activeColors.primary }}>Search</Text>
        </TouchableOpacity>
      </View>
      {filteredData.length === 0 ? (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>No items found.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  main:{
    alignItems:'center',
    gap:15
  },
  container: {
    height:50,
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  inputBox: {
    flex: 1,
    height: 40,

    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  flatListContainer: {
    paddingBottom: 100,
  },
  search: {

    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 42,
    borderRadius: 10,
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
    height: 52,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },
});
