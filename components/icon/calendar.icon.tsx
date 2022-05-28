import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./icon.props";

export function CalendarIcon({ width = 16, height = 16, stroke }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        clipRule="evenodd"
        d="M2 4.667a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.666 1.333V4M5.333 1.333V4M2 6.667h12"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
