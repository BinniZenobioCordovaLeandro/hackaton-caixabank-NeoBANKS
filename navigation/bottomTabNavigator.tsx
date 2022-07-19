import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import TabTwoScreen from "../screens/TabTwoScreen";
import { HomeScreenMobile } from "../screens/home-screen/HomeScreen.mobile";
import Icon from "../components/icon/icon";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
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
        component={HomeScreenMobile}
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
