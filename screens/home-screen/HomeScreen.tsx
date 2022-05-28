import React from "react";
import { ScreenContainer } from "react-native-screens";
import Icon from "../../components/icon/icon";
import { RootTabScreenProps } from "../../types";
import { Row, Separator, TitleLogo } from "./HomeScreen.preset";

export function HomeScreen({ navigation }: RootTabScreenProps<"Root">) {
  return (
    <ScreenContainer>
      <Row>
        <Icon name="logo" />
        <TitleLogo>Banks</TitleLogo>
      </Row>
      <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </ScreenContainer>
  );
}
