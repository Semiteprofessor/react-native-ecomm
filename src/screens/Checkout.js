/** @format */

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { TextInput } from "react-native-element-textinput";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [formData, setFormData] = useState({
    // Card information
    underwriters: "",
    paymentFrequency: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            paddingHorizontal: 100,
          }}>
          <Image
            source={require("../../assets/images/visa.png")}
            resizeMode="contain"
            style={{ width: 60, height: 60 }}
          />
          <Image
            source={require("../../assets/images/MasterCard.png")}
            resizeMode="contain"
            style={{ width: 60, height: 60 }}
          />
        </View>
        <View style={styles.container}>
          {/* {renderLabel()} */}
          <Dropdown
            style={styles.input}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select Underwriter" : "..."}
            searchPlaceholder="Search..."
            value={formData.underwriters}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(underwriters) => {
              setFormData({ ...formData, underwriters });
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "black"}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <View style={styles.container}>
          {/* {renderLabel()} */}
          <Dropdown
            style={styles.input}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select Payment Frequency" : "..."}
            searchPlaceholder="Search..."
            value={formData.paymentFrequency}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(paymentFrequency) => {
              setFormData({ ...formData, paymentFrequency });
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "black"}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            value={formData.cardNumber}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Card Number"
            placeholderTextColor="gray"
            onChangeText={(cardNumber) => {
              setFormData({ ...formData, cardNumber });
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            value={formData.expiryDate}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Expiry Date"
            placeholderTextColor="gray"
            onChangeText={(expiryDate) => {
              setFormData({ ...formData, expiryDate });
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            value={formData.cvv}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="CVV"
            placeholderTextColor="gray"
            onChangeText={(cvv) => {
              setFormData({ ...formData, cvv });
            }}
          />
        </View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              marginTop: 30,
            }}>
            <Text>Price:</Text>
            <Text style={{ marginLeft: 5 }}>₦5,000</Text>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              paddingHorizontal: 10,
              width: 150,
              paddingVertical: 8,
              backgroundColor: "coral",
              borderRadius: 2,
              marginTop: 30,
              alignSelf: "flex-end",
            }}>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "700",
                textAlign: "center",
              }}>
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#c4c2c2",
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
