import React from "react";
import { View } from "react-native";
import { IconProps } from "./icon.props";
import { LogoIcon } from "./logo.icon";

export default function Icon({ name }: IconProps) {
  switch (name) {
    case "logo":
      return <LogoIcon />;
      break;

    default:
      return <View />;
      break;
  }
}
