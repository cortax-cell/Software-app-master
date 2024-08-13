import React, { useContext } from 'react';
import { View, Image, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../../../Context/CartContext';
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from '../../../Context/ThemeContext';

const CartScreen = () => {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const increaseQuantity = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <View style={[styles.container,{backgroundColor:activeColors.primary,}]}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <View style={[styles.cartItem,{backgroundColor:activeColors.secondary,}]}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={[styles.title,{color:activeColors.txt}]} numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={[styles.price,{color:activeColors.txt}]}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item)}>
                    <Text style={[styles.quantityButton,{borderColor:activeColors.tertiary,backgroundColor:activeColors.secondary,color:activeColors.tertiary,}]}>-</Text>
                  </TouchableOpacity>
                  <Text style={[styles.quantity,{color:activeColors.txt}]}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item)}>
                    <Text style={[styles.quantityButton,{borderColor:activeColors.tertiary,backgroundColor:activeColors.secondary,color:activeColors.tertiary,}]}>+</Text>
                  </TouchableOpacity>
                </View>
                </View>

              </View>
            </View>
          </View>
        )}
        
      />
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
        <TouchableOpacity style={[styles.button,{backgroundColor:activeColors.tertiary,}]} onPress={clearCart}>
            <Text style={[styles.buttonText,{color: activeColors.primary,}]}>Clear Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:activeColors.tertiary,}]}>
            <Text style={[styles.buttonText,{color: activeColors.primary,}]}>Cheakout</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    flex: 1,
  },
  cartItemContainer: {
    marginTop:5,
    marginBottom: 5,
    
  },
  cartItem: {
    flexDirection: 'row',
    borderRadius:10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    gap:5
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    flexShrink: 1,
  },
  category:{
    fontSize: 12,
    fontWeight: '400',
    color: "#888",
    flexShrink: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    gap: 10,
  },
  quantityButton: {
    height:40,
    width:40,
    fontSize: 20,
    textAlign:'center',
    padding:5,

    borderRadius: 5,

    borderWidth:2,
  },
  quantity: {
    fontSize: 16,
  },
  button: {

    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    height: 48,
    width:'48%',
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {

    fontWeight: "bold",
    
  },
});

export default CartScreen;
