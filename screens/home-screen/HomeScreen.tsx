import React from "react";
import { ScreenContainer } from "react-native-screens";
import { RootTabScreenProps } from "../../types";
import { Separator, Title } from "./HomeScreen.preset";

export function HomeScreen({ navigation }: RootTabScreenProps<"Root">) {
  return (
    <ScreenContainer>
      <Title>HomeScreen</Title>
      <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </ScreenContainer>
  );
}
