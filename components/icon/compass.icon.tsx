import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./icon.props";

export function CompassIcon({ width = 20, height = 20, stroke }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.853 11.254a1.5 1.5 0 01-.604.604L6.44 14.41c-.584.312-1.247-.33-.916-.915L8.075 8.68c.136-.253.35-.468.603-.604l4.811-2.554c.584-.331 1.246.332.915.917l-2.551 4.814zM0 9.964c0 5.496 4.468 9.963 9.964 9.963s9.963-4.467 9.963-9.963C19.927 4.468 15.46 0 9.964 0 4.468 0 0 4.468 0 9.964z"
        fill={stroke}
        fillOpacity={0.53}
      />
    </Svg>
  );
}
