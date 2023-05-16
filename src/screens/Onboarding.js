/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focus }) => {
    icon + "", (color = focus ? "black" : "white"), (size = 24);
  },
});

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", flexDirection: "column" }}>
      <ImageBackground
        source={require("../../assets/images/shopping-bag.png")}
        resizeMode="cover"
        style={styles.bg}
      />

      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#ffffff",
              textShadowColor: "#000",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}>
            Welcome to <Text style={{ color: "red" }}>Amazon</Text> Online
            Shopping.{" "}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#42f5e3",
              textShadowColor: "#000",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}>
            Which product do you want today
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: "#7d1b78",
              padding: 15,
              borderRadius: 5,
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: 18,
                color: "#fff",
                fontStyle: "italic",
              }}>
              Get Started
            </Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="#fff"
              style={{ fontWeight: "bold" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currentIndicator: {
    height: 6,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#1763b0",
    marginHorizontal: 4,
  },
  indicator: {
    height: 6,
    width: 12,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    marginHorizontal: 4,
    textShadowColor: "#000",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  bg: {
    flex: 1,
    height: "200%",
    opacity: 0.7,
  },
});
