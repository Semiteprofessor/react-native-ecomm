/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import CartProductCard from "./CartProductCard";
import { useSelector } from "react-redux";
import COLORS from "../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import EmptyCart from "./EmptyCart";
// import PaymentModelSection from "../components/Section/PaymentModel";

const Cart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModelVisible, setModelVisible] = useState(false);
  useEffect(() => {
    let priceTotal = 0;
    cartItems.forEach((item) => {
      priceTotal += Number(item.price);
    });
    setTotalPrice(Number(priceTotal).toFixed(2));
  }, [cartItems]);
  return (
    <View style={styles.view}>
      {/* <PaymentModelSection
        navigation={navigation}
        isVisible={isModelVisible}
        setIsVisible={setModelVisible}
        totalPrice={totalPrice}
      /> */}
      {/* {cartItems.length > 0 ? ( */}
      <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              borderRadius: 50,
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "lightgray",
              marginTop: 40,
              marginBottom: 10,
              marginLeft: 15,
            }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={24}
              style={{ color: "#7d1b78", fontWeight: "bold" }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.screen}>
          <ScrollView style={styles.list}>
            {cartItems.map((productData) => (
              <CartProductCard
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                productData={productData}
                key={productData.id}
                navigation={navigation}
              />
            ))}
            <View style={styles.emptyItem}></View>
          </ScrollView>
        </View>
        <LinearGradient
          colors={[COLORS.whiteTrans, COLORS.white]}
          style={styles.checkout}>
          <TouchableOpacity
            style={styles.checkoutBtn}
            textStyle={styles.checkoutText}
            onPress={() => navigation.navigate("Checkout")}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: 18,
                color: "#fff",
              }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
          <Text style={styles.checkoutPrice}>Price: ₦{totalPrice}</Text>
        </LinearGradient>
      </>
      {/* ) : (
        <EmptyCart />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: "relative",
    backgroundColor: COLORS.bgColor,
  },
  screen: {
    position: "relative",
  },
  list: {
    paddingHorizontal: 15,
    transform: [{ translateY: 90 }],
  },
  emptyItem: {
    minHeight: 170,
  },
  checkout: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 15,
    alignSelf: "center",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkoutBtn: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.primaryColor,
    marginRight: 10,
    elevation: 3,
  },
  checkoutText: {
    color: COLORS.white,
    fontSize: 15,
  },
  checkoutPrice: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    fontSize: 15,
    textAlign: "center",
    elevation: 3,
  },
});

export default Cart;
