/** @format */

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { productsData } from "../data";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Rating from "../components/Rating";

const { width } = Dimensions.get("screen");
const cardWidth = width - 25;

const Home = ({ navigation: { navigate } }) => {
  const [selectedCategoryIndex, setSelectedCategoeyIndex] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              width: "90%",
              borderLeftColor: "gray",
            }}
            placeholder="Search for products..."
          />
          <MaterialIcons
            name="search"
            size={28}
            style={{ color: "gray", marginLeft: 5 }}
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons
            name="tune"
            size={28}
            color="white"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              color: "#7d1b78",
              marginBottom: 20,
            }}>
            Product List
          </Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={productsData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate("Details", item)}>
            <View style={{ width: "40%" }}>
              <Image
                source={{ uri: item.imageUrl1 }}
                style={{ height: "90%", width: 130 }}
              />
            </View>
            <View
              style={{
                height: "90%",
                width: "40%",
                flex: 1,
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}>
                  {item.name}
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#7d1b78",
                    marginTop: 5,
                  }}>
                  ₦{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  color: "gray",
                  alignItems: "center",
                  marginTop: 5,
                }}>
                <Text style={{ color: "gray", fontSize: 12 }}>
                  {item.description}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}>
                <Image
                  source={require("../../assets/images/icons8-star-96.png")}
                  style={{ height: 16, width: 16 }}
                />
                <Rating value={item.rating} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  card: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    borderColor: "#7d1b78",
    borderWidth: 1.5,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sortBtn: {
    width: 45,
    height: 45,
    marginLeft: 10,
    backgroundColor: "#7d1b78",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
