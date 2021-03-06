/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import React from "react";
import {
  ScrollView,
  Text as DefaultText,
  View as DefaultView,
  TouchableWithoutFeedback as DefaultTouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps &
  DefaultText["props"] & {
    type:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "title"
      | "body"
      | "label-large"
      | "label";
  };
export type ViewProps = ThemeProps & DefaultView["props"];
export type ViewContainerProps = ThemeProps &
  DefaultView["props"] & {
    withBackground?: boolean;
  };

export type ButtonProps = ThemeProps &
  DefaultTouchableWithoutFeedback["props"] & {
    type?: "primary" | "underline" | "outline";
    focused?: boolean;
  };

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  let textSize = 12;
  switch (props.type) {
    case "h1":
      textSize = 48;
      break;

    case "h2":
      textSize = 30;
      break;

    case "h3":
      textSize = 24;
      break;

    case "h4":
      textSize = 20;
      break;

    case "title":
      textSize = 15;
      break;

    case "body":
      textSize = 14;
      break;

    case "label-large":
      textSize = 12;
      break;

    case "label":
      textSize = 11;
      break;

    default:
      textSize = 12;
      break;
  }
  return (
    <DefaultText
      style={[
        { color },
        style,
        { fontSize: textSize, fontFamily: "Montserrat", letterSpacing: 0.01 },
      ]}
      {...otherProps}
    />
  );
}

export function ViewContainer(props: ViewContainerProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  let localStyle = {};
  if (props.withBackground) {
    localStyle = {
      backgroundColor: useThemeColor(
        { light: lightColor, dark: darkColor },
        "background",
      ),
    };
  }
  return <DefaultView style={[localStyle, style]} {...otherProps} />;
}

export function ViewCard(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Screen(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: "#F2F6F9", dark: darkColor },
    "background",
  );

  return (
    <ScrollView>
      <SafeAreaView>
        <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
      </SafeAreaView>
    </ScrollView>
  );
}

export function Button(props: ButtonProps) {
  const {
    style,
    type,
    focused = false,
    lightColor,
    darkColor,
    ...otherProps
  } = props;

  let localStyle = {};
  if (type) {
    switch (props.type) {
      case "primary":
        localStyle = {
          backgroundColor: useThemeColor(
            { light: lightColor, dark: darkColor },
            "background",
          ),
        };
        break;

      case "underline":
        localStyle = {
          height: 61,
          borderStyle: "solid",
          borderBottomColor: focused ? "#6979F8" : undefined,
          color: focused ? "#6979F8" : undefined,
          borderBottomWidth: focused ? 5 : undefined,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        };
        break;

      case "outline":
        localStyle = {
          height: 61,
          borderStyle: "solid",
          borderColor: focused ? "#6979F8" : "#E5E5E5",
          borderRadius: 4,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        };
        break;

      default:
        localStyle = {};
        break;
    }
  }

  return (
    <DefaultTouchableWithoutFeedback style={[localStyle, style, { ...props }]}>
      <ViewContainer style={[localStyle, style]}>
        {props.children}
      </ViewContainer>
    </DefaultTouchableWithoutFeedback>
  );
}
