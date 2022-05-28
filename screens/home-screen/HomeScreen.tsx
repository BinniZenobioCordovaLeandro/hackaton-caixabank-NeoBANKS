import React from "react";
import Icon from "../../components/icon/icon";
import { RootTabScreenProps } from "../../types";
import {
  BodyTransaction,
  CardGraphic,
  CardHistoryContainer,
  CardResumeContainer,
  LabelTextCard,
  LogoContainer,
  ScreenContainer,
  SmallCard,
  StageTextCard,
  TitleContainer,
  TitleLogo,
  TitleTransaction,
} from "./HomeScreen.preset";

export function HomeScreen({ navigation }: RootTabScreenProps<"Root">) {
  return (
    <ScreenContainer>
      <LogoContainer>
        <Icon name="logo" height={20} />
        <TitleLogo type="h2">BANKS</TitleLogo>
      </LogoContainer>
      <TitleContainer>
        <TitleTransaction type="h3">Transactions history</TitleTransaction>
        <BodyTransaction type="body">
          These are your monthly and daily actions. ️📊
        </BodyTransaction>
      </TitleContainer>
      <CardResumeContainer>
        <SmallCard title="Transactions" type="shadow">
          <StageTextCard type="h1">35</StageTextCard>
          <LabelTextCard type="label">LAST MONTH</LabelTextCard>
        </SmallCard>
        <SmallCard title="Transactions" type="shadow">
          <StageTextCard type="h1">3</StageTextCard>
          <LabelTextCard type="label">TODAY</LabelTextCard>
        </SmallCard>
      </CardResumeContainer>
      <CardHistoryContainer>
        <CardGraphic title="Transactions last year" type="shadow"></CardGraphic>
      </CardHistoryContainer>
    </ScreenContainer>
  );
}
