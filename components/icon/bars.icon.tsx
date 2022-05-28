import * as React from "react";
import Svg, { Rect } from "react-native-svg";
import { IconProps } from "./icon.props";

export function BarsIcon({ width = 18, height = 19, stroke }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <Rect width={4} height={19} rx={2} fill={stroke} />
      <Rect x={7} y={4} width={4} height={15} rx={2} fill={stroke} />
      <Rect x={14} y={11} width={4} height={8} rx={2} fill={stroke} />
    </Svg>
  );
}
