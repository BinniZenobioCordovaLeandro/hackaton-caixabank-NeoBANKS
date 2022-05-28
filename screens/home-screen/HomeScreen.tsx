import React from "react";
import { ScreenContainer } from "react-native-screens";
import Icon from "../../components/icon/icon";
import { RootTabScreenProps } from "../../types";
import {
  BodyTransaction,
  Row,
  Separator,
  TitleContainer,
  TitleLogo,
  TitleTransaction,
} from "./HomeScreen.preset";

export function HomeScreen({ navigation }: RootTabScreenProps<"Root">) {
  return (
    <ScreenContainer>
      <Row>
        <Icon name="logo" height={24} />
        <TitleLogo type="h2">BANKS</TitleLogo>
      </Row>
      <TitleContainer>
        <TitleTransaction type="h1">Transactions history</TitleTransaction>
        <BodyTransaction type="body">
          These are your monthly and daily actions. ️📊
        </BodyTransaction>
      </TitleContainer>
      <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </ScreenContainer>
  );
}
