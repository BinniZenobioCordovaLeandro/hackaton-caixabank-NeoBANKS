import React from "react";
import { View } from "react-native";
import { IconProps } from "./icon.props";
import { LogoIcon } from "./logo.icon";

export default function Icon({ name, width, height }: IconProps) {
  switch (name) {
    case "logo":
      return <LogoIcon width={width} height={height} />;
      break;

    default:
      return <View />;
      break;
  }
}
