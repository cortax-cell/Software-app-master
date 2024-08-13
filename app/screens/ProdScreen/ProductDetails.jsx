import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import Data2 from "../../../Data/Data2";
import { CartContext } from "../../../Context/CartContext";
import { colors } from '../../../Theme/Theme'
import { ThemeContext } from "../../../Context/ThemeContext";

const ProductDetails= ({route}) => {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode]
    const { itemId } = route.params;
    const product = Data2.find((product) => product.id === itemId);
    const { addToCart } = useContext(CartContext);
  return (
    
      <View key={product.id} style={[styles.container,{backgroundColor: activeColors.primary,}]}>
        <ScrollView showsVerticalScrollIndicator={false}> 

        <Image style={styles.productImage} source={{ uri: product.image }} />
        <Text style={[styles.productTitle,{color:activeColors.txt,}]}>{product.title}</Text>
        <Text style={[styles.productRating,{color:activeColors.txt,}]}>⭐ {product.rating}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
        <Text style={[styles.productDescription,{color:activeColors.txt,}]}>{product.description}</Text>
        </ScrollView>
        <View style={[styles.buttonContainer,{backgroundColor:activeColors.primary}]}>
        <Text style={[styles.productPrice,{color:activeColors.txt,}]}>{product.price}</Text>
          <TouchableOpacity
            style={[styles.button,{backgroundColor:activeColors.tertiary,}]} onPress={() => addToCart(product)}
          >
            <Text style={[styles.buttonText,    {color: activeColors.primary,}]}>
              {"Add to Cart"}
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding:15
  },
  productImage: {
    marginTop:80,
    width: "100%",
    height: 350,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom:30,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 25,

    marginLeft:10,
    fontWeight:'700'
  },
  productDescription: {
    fontSize: 16,

    marginVertical: 10,
  },
  productCategory: {
    fontSize: 15,
    color: "#888",
    fontWeight:'500',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 18,
    fontWeight:'bold',
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  button: {

    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    height: 48,
    width:'60%',
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

export default ProductDetails;
