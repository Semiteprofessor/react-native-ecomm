/** @format */

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import About from "../screens/About";
import { Ionicons, MaterialIcons, Octicons } from "react-native-vector-icons";
import SendRequestScreen from "../screens/SendRequest";

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            <Octicons name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            <Ionicons name="keypad" size={24} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="SendRequest"
        component={SendRequest}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            <Ionicons name="keypad" size={24} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomTabs;
