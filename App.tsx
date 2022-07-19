import React from "react";
import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation, NavigationDesktop } from "./navigation";
import { useFonts } from "expo-font";
import { useLayout } from "./hooks/useLayout";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  const layout = useLayout();

  if (!isLoadingComplete && !loaded) {
    return null;
  } else {
    if (layout.isMobile || layout.isTablet)
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    return <NavigationDesktop colorScheme={colorScheme} />;
  }
}
