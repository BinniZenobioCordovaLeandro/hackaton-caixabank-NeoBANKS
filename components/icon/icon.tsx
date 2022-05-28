import React from "react";
import { View } from "react-native";
import { AvatarIcon } from "./avatar.icon";
import { BarsIcon } from "./bars.icon";
import { CalendarIcon } from "./calendar.icon";
import { CompassIcon } from "./compass.icon";
import { DotsIcon } from "./dots.icon";
import { IconProps } from "./icon.props";
import { LogoIcon } from "./logo.icon";
import { SettingIcon } from "./setting.icon";

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

    case "setting":
      return <SettingIcon {...props} />;
      break;

    case "dots":
      return <DotsIcon {...props} />;
      break;

    case "calendar":
      return <CalendarIcon {...props} />;
      break;

    default:
      return <View />;
      break;
  }
}
