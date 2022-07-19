import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const useOrientation = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result: any) => {
      setScreenInfo(result.screen);
    };

    const listener = Dimensions.addEventListener("change", onChange);
    return () => listener.remove();
  });

  return {
    ...screenInfo,
    isLandscape: screenInfo.width > screenInfo.height,
    isPortrait: screenInfo.width < screenInfo.height,
  };
};
