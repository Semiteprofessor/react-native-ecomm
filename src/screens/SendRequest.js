/** @format */

import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NumberPad from "./NumberPad";

const SendRequest = () => {
  const [amount, setAmount] = useState("0");

  const convertToNaira = (currentAmount) => {
    const newAmount = currentAmount / 100;

    return newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Send </Text>

      <View
        title
        heavy
        style={{
          marginTop: 64,
          alignItems: "center",
          fontSize: 32,
          fontWeight: 700,
        }}>
        <Text title heavy>
          ₦{convertToNaira(View)}
        </Text>
        <Text bold color="#727479">
          Choose amount to send
        </Text>
      </View>

      {/* <View
        style={{
          marginTop: 32,
          marginBottom: 16,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Image
          source={require("../../assets/images/photo.jpg")}
          resizeMode="contain"
          style={{ width: 40, height: 40, borderRadius: 12 }}
        />
        <View style={{ flex: 1, marginTop: 0, marginBottom: 16 }}>
          <Text medium heavy>
            Rancho_Dev
          </Text>
          <Text bold color="#727479">
            Software Developer
          </Text>
        </View>
        <MaterialIcons name="edit" size={16} color="#ffffff" />
      </View> */}

      <TouchableOpacity
        style={{
          margin: 16,
          backgroundColor: "#519654",
          paddingTop: 16,
          paddingBottom: 32,
          alignItems: "center",
          borderRadius: 12,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 700 }}>
          Send ₦{convertToNaira(amount)} to Rancho_Dev
        </Text>
      </TouchableOpacity>

      <NumberPad onPress={pressKey} />

      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default SendRequest;
