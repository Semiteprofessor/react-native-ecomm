/** @format */

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { TextInput } from "react-native-element-textinput";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
                marginTop: 40,
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
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 36, fontWeight: "bold", color: "#7d1b78" }}>
            Sign Up
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Surname"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Other Names"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="e-Mail"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Phone Number"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              mode="password"
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Password"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              mode="password"
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Confirm Password"
              placeholderTextColor="gray"
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            style={{
              backgroundColor: "#7d1b78",
              padding: 13,
              borderRadius: 5,
              marginBottom: 10,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: 18,
                color: "#fff",
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}>
            <Text>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#7d1b78", fontWeight: "700" }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 5,
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
  textarea: {
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#c4c2c2",
    paddingBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
  },
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
