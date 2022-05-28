import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { IconProps } from "./icon.props";

export function LogoIcon({ width = 69, height = 24 }: IconProps) {
  return (
    <Svg width={width} height={24} viewBox="0 0 69 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.348 24c-3.954 0-7.061-1.884-9.322-5.65-.835-1.629-1.252-3.28-1.252-4.954 0-3.966 1.878-7.082 5.635-9.35 1.623-.837 3.27-1.255 4.94-1.255 3.953 0 7.06 1.883 9.321 5.651.835 1.628 1.253 3.28 1.253 4.954 0 3.965-1.879 7.08-5.635 9.348-1.624.837-3.27 1.256-4.94 1.256zm8.557-10.116v-.977c0-2.662-1.391-4.988-4.174-6.977-1.496-.744-2.794-1.116-3.896-1.116h-.974c-2.655 0-4.974 1.395-6.957 4.186-.742 1.5-1.113 2.802-1.113 3.907v.977c0 2.663 1.392 4.988 4.175 6.977 1.495.744 2.794 1.116 3.895 1.116h.974c2.655 0 4.974-1.396 6.957-4.186.742-1.5 1.113-2.802 1.113-3.907zm-23.243 1.465H26.618v.07c0 1.244.719 2.71 2.157 4.395 1.588 1.489 3.35 2.233 5.287 2.233h.974c.092.011.139.058.139.139v1.674c0 .094-.047.14-.14.14h-1.252c-3.073 0-5.716-1.581-7.93-4.744-.836-1.663-1.253-3.151-1.253-4.465v-.838c0-3.08 1.577-5.732 4.73-7.953 1.659-.837 3.143-1.256 4.453-1.256h.835c3.073 0 5.716 1.582 7.931 4.744.835 1.664 1.252 3.152 1.252 4.465v1.256c0 .094-.046.14-.139.14zm-1.878-2.023c0-1.245-.72-2.71-2.157-4.396-1.589-1.488-3.35-2.232-5.287-2.232h-.278c-2.9 0-5.149 1.442-6.749 4.325-.463.989-.695 1.78-.695 2.373h15.166v-.07zM1.948 5.023v6.907c0 .094-.046.14-.14.14H.14c-.092 0-.139-.046-.139-.14V0h.07l17.183 18.977V12.07c.012-.093.059-.14.14-.14h1.67c.092.012.139.059.139.14V24h-.07L1.948 5.023z"
        fill="url(#paint0_linear_577_10)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_577_10"
          x1={19.2985}
          y1={8.34043}
          x2={19.1408}
          y2={39.4895}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.236718} stopColor="#260CBC" />
          <Stop offset={0.98292} stopColor="#6756FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
