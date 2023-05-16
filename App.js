/** @format */

import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./src/navigation/Bottom-Tab";
import ReviewDetails from "./src/screens/ProductDetail";
import OnBoardScreen from "./src/screens/Onboarding";
import LoginScreen from "./src/screens/Login";
import Register from "./src/screens/Register";
import RegisterScreen from "./src/screens/Register";
import ProductDetail from "./src/screens/ProductDetail";
import Cart from "./src/screens/Cart";
const Stack = createStackNavigator();
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NativeBaseProvider } from "native-base";
import Card from "./src/screens/Checkout";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={OnBoardScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Tabs" component={BottomTabs} />
            <Stack.Screen name="Details" component={ProductDetail} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Checkout" component={Card} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
