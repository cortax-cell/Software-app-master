import React, { useContext } from 'react';
import { View,Image, Text, FlatList, Button, StyleSheet,ScrollView } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <View  style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.cartItem}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:40}}>
              <View>
                <Text style={{fontSize:20,fontWeight:'500',}}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>Quantity: {item.quantity}</Text>
              </View>
            <Text style={{fontSize:25,fontWeight:'bold',marginRight:10}}>{item.price}</Text>
            </View> 
          </View>
          <Button title="Remove From Cart" onPress={() => removeFromCart(item.id)} />
          </View>
          )}
      />
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#192A56',
    borderRadius:30,
    height:'100vh',
    marginBottom:90
  },
  header: {
    fontSize:40,
    fontFamily:'sans-serif',
    fontWeight:'bold',
    color:'#99AAAB',
    textAlign:'center'
  },
  cartItem: {
    flexDirection:'row',
    backgroundColor:'#DAE0E2',
    padding:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:30
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

export default CartScreen;
