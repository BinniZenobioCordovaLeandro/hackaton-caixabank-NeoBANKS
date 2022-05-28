import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./icon.props";

export function AvatarIcon({ width = 20, height = 21, stroke }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        d="M19.183 20.39H1.672a.73.73 0 01-.745-.745c0-5.258 3.374-8.16 9.5-8.16 6.127 0 9.5 2.902 9.5 8.16a.73.73 0 01-.744.744zM10.428 10.393c-2.729 0-4.937-2.406-4.937-5.358C5.491 2.158 7.625 0 10.428 0c2.802 0 4.935 2.158 4.935 5.035 0 2.952-2.207 5.358-4.935 5.358z"
        fill={stroke}
        fillOpacity={0.53}
      />
    </Svg>
  );
}
