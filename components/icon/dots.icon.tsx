import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./icon.props";

export function DotsIcon({ width = 16, height = 16, stroke }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.333 9.333a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm4.667 0a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zM11.333 8A1.333 1.333 0 1014 8a1.333 1.333 0 00-2.667 0z"
        fill="#333"
      />
    </Svg>
  );
}
