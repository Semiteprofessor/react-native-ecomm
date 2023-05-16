/** @format */

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

const NumberPad = ({ onPress }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    <MaterialIcons name="keyboard-backspace" size={24} />,
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 0,
        marginBottom: 30,
      }}>
      {buttons.map((item, index) => {
        return (
          <TouchableOpacity
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "#1c5170",
            }}
            key={index}
            onPress={() => onPress(item, index)}
            delayPressIn={0}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NumberPad;
