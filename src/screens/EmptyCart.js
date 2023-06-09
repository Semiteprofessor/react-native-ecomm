/** @format */

import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const EmptyCart = () => {
  return (
    <View style={Styles.emptyPage}>
      <View style={Styles.illustration}>
        <ImageBackground
          resizeMode="center"
          style={Styles.illustrationImage}
          source={require("../../assets/images/empty-cart.png")}></ImageBackground>
      </View>
      <View style={Styles.emptyTextBox}>
        <Text style={Styles.emptyText}>Your cart is empty.</Text>
        <Text style={Styles.emptyText}>Please add a few items.</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  emptyPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    height: 200,
    width: 300,
  },
  illustrationImage: {
    height: "100%",
    width: "100%",
  },
  emptyTextBox: {
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.7,
  },
});

export default EmptyCart;
