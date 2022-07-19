import React from "react";
import Chart from "../../components/chart/chart";
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
  TabButton,
  TabsContainer,
  TabText,
  TitleContainer,
  TitleLogo,
  TitleTransaction,
} from "./HomeScreen.mobile.preset";

export function HomeScreenMobile({ navigation }: RootTabScreenProps<"Root">) {
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
        <CardGraphic
          title="Transactions last year"
          type="shadow"
          alignTitle="flex-start"
        >
          <TabsContainer>
            <TabButton type="underline" focused>
              <TabText type="label-large">Monthly</TabText>
            </TabButton>
            <TabButton type="underline">
              <TabText type="label-large">Daily</TabText>
            </TabButton>
          </TabsContainer>
          <Chart height={170} name="interactiveLine" />
        </CardGraphic>
      </CardHistoryContainer>
    </ScreenContainer>
  );
}
