import React from "react";
import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMediaQuery } from "react-responsive";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation, NavigationDesktop } from "./navigation";
import { useFonts } from "expo-font";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)",
  });

  if (!isLoadingComplete && !loaded) {
    return null;
  } else {
    if (isTabletOrMobileDevice)
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    return <NavigationDesktop colorScheme={colorScheme} />;
  }
}
