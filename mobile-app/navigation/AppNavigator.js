import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddApplianceScreen from "../screens/AddApplianceScreen";
import ApplianceListScreen from "../screens/ApplianceListScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddAppliance" component={AddApplianceScreen} />
      <Stack.Screen name="ApplianceList" component={ApplianceListScreen} />
    </Stack.Navigator>
  );
}