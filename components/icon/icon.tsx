import React from "react";
import { View } from "react-native";
import { AvatarIcon } from "./avatar.icon";
import { BarsIcon } from "./bars.icon";
import { CompassIcon } from "./compass.icon";
import { IconProps } from "./icon.props";
import { LogoIcon } from "./logo.icon";

export default function Icon(props: IconProps) {
  const { name } = props;

  switch (name) {
    case "logo":
      return <LogoIcon {...props} />;
      break;

    case "bars":
      return <BarsIcon {...props} />;
      break;

    case "compass":
      return <CompassIcon {...props} />;
      break;

    case "avatar":
      return <AvatarIcon {...props} />;
      break;

    default:
      return <View />;
      break;
  }
}
