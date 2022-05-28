import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import TabTwoScreen from "../screens/TabTwoScreen";
import { HomeScreen } from "../screens/home-screen/HomeScreen";
import Icon from "../components/icon/icon";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Root"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#E7F1FF",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 10,
          right: 10,
          backgroundColor: "#2D14C4",
          height: 62,
          borderRadius: 31,
          alignContent: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="bars" stroke={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <Icon name="compass" stroke={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <Icon name="avatar" stroke={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
