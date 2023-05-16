/** @format */

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  Box,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../colors";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttons from "../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/actions/cartAction";
import Review from "../components/Review";

const ProductDetail = ({ route: { params }, navigation }) => {
  const [isFavItem, setIsFavItem] = useState(false);
  const [value, setValue] = useState(0);
  const id = params.id;
  const name = params.name;
  const imageUrl = params.imageUrl1;
  const price = params.price;
  const countInStock = params.countInStock;
  const brand = params.brand;
  const rating = params.rating;
  const color = params.color;
  const size = params.size;
  const description = params.description;
  const category = params.category;
  const numReviews = params.numReviews;

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function toggleFavHandler() {
    setIsFavItem(!isFavItem);
  }

  function toggleFavHandler() {
    setIsFavItem(!isFavItem);
  }

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              borderRadius: 50,
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "lightgray",
              marginTop: 10,
              marginBottom: 10,
            }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={24}
              style={{ color: "#7d1b78", fontWeight: "bold" }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: imageUrl }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="cover"
          mb={3}
        />
        <Heading bold fontSize={25} mb={3} mt={5}>
          {name}
        </Heading>
        <Rating value={rating} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={160}
            totalHeight={37}
            iconSize={30}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            onChange={setValue}
          />
          <Spacer />
          <Heading bold color={Colors.main} fontSize={19}>
            ₦{price.toLocaleString()}
          </Heading>
        </HStack>
        <Text>{description}</Text>
        <Buttons
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}>
          ADD TO CART
        </Buttons>
        {/* Review */}
        {/* <Review /> */}
      </ScrollView>
    </Box>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },

  imageView: {
    flex: 1,
    // paddingVertical: 40,
  },
  productImage: {
    height: "100%",
    width: "100%",
    transform: [{ translateY: 30 }],
  },
  infoView: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#7d1b78",
    elevation: 40,
    paddingTop: 20,
    marginTop: 20,
  },
  container: {
    paddingHorizontal: 15,
  },

  addToCart: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    right: 10,
    alignSelf: "center",
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: "teal",
  },

  empty: {
    minHeight: 50,
  },
});

export default ProductDetail;
