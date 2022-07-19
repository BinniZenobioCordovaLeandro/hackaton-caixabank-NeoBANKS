import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import NotFoundScreen from "../screens/NotFoundScreen";
import ModalScreen from "../screens/ModalScreen";
import { BottomTabNavigator } from "./bottomTabNavigator";
import TabTwoScreen from "../screens/TabTwoScreen";
import { HomeScreenDesktop } from "../screens/home-screen/HomeScreen.desktop";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const StackDesktop = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function RootNavigatorDesktop() {
  return (
    <StackDesktop.Navigator>
      <StackDesktop.Screen
        name="Root"
        component={HomeScreenDesktop}
        options={{ headerShown: false }}
      />
      <StackDesktop.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{ title: "Tab Two" }}
      />
      <StackDesktop.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <StackDesktop.Group screenOptions={{ presentation: "modal" }}>
        <StackDesktop.Screen name="Modal" component={ModalScreen} />
      </StackDesktop.Group>
    </StackDesktop.Navigator>
  );
}
