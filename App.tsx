import React from "react";
import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMediaQuery } from "react-responsive";
import { Text } from "./components/Themed";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)",
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isTabletOrMobileDevice)
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    return <Text>Navigation stack to desktop, without status bar</Text>;
  }
}
