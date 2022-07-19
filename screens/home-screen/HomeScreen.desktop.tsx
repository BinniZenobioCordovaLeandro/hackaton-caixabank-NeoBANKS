import React from "react";
import Chart from "../../components/chart/chart";
import Icon from "../../components/icon/icon";
import { RootTabScreenProps } from "../../types";
import {
  ActionButton,
  ActionButtonCalendar,
  ActionButtonContainer,
  ActionsContainer,
  BodyContainer,
  CardGraphic,
  CardHistoryContainer,
  CardPieContainer,
  CardResumeContainer,
  DateText,
  HeaderContainer,
  LabelTextCard,
  LargeCellContainer,
  LogoContainer,
  PieChartWrapper,
  PositivePercentage,
  ResumeChartContainer,
  RevenueAmount,
  RevenueText,
  ScreenContainer,
  SmallCard,
  SmallCellContainer,
  StageTextCard,
  TitleContainer,
  TitleLogo,
  TitleTransaction,
} from "./HomeScreen.desktop.preset";

export function HomeScreenDesktop({ navigation }: RootTabScreenProps<"Root">) {
  return (
    <ScreenContainer>
      <HeaderContainer withBackground>
        <LogoContainer>
          <Icon name="logo" height={20} />
          <TitleLogo type="h2">BANKS</TitleLogo>
        </LogoContainer>
        <ActionsContainer>
          <Icon name="setting" height={20} />
        </ActionsContainer>
      </HeaderContainer>
      <TitleContainer>
        <TitleTransaction type="body">Dashboard</TitleTransaction>
      </TitleContainer>
      <BodyContainer withBackground>
        <SmallCellContainer>
          <CardResumeContainer>
            <SmallCard title="Transactions">
              <StageTextCard type="h1">35</StageTextCard>
              <LabelTextCard type="label">LAST MONTH</LabelTextCard>
            </SmallCard>
            <SmallCard title="Transactions">
              <StageTextCard type="h1">3</StageTextCard>
              <LabelTextCard type="label">TODAY</LabelTextCard>
            </SmallCard>
          </CardResumeContainer>
          <CardPieContainer>
            <CardGraphic
              title="Conversion"
              alignTitle="space-between"
              actions={
                <ActionButton
                  type="outline"
                  onPress={() => {
                    console.log("Conversion");
                  }}
                >
                  <Icon name="dots" />
                </ActionButton>
              }
            >
              <PieChartWrapper>
                <Chart
                  name="pie"
                  data={[
                    {
                      key: 2,
                      amount: 35,
                      svg: { fill: "#9013FE" },
                    },
                    {
                      key: 3,
                      amount: 45,
                      svg: { fill: "#007AFF" },
                    },
                    {
                      key: 4,
                      amount: 10,
                      svg: { fill: "#FB8832" },
                    },
                    {
                      key: 5,
                      amount: 20,
                      svg: { fill: "#E6E5E6" },
                    },
                  ]}
                />
              </PieChartWrapper>
            </CardGraphic>
          </CardPieContainer>
        </SmallCellContainer>
        <LargeCellContainer>
          <CardHistoryContainer>
            <CardGraphic
              title="Weekly  expenses"
              titleType="h3"
              alignTitle="space-between"
              actions={
                <ActionButtonCalendar
                  type="outline"
                  onPress={() => {
                    console.log("show datepicker");
                  }}
                >
                  <ActionButtonContainer>
                    <DateText type="body">Oct - Nov 2019</DateText>
                    <Icon name="calendar" />
                  </ActionButtonContainer>
                </ActionButtonCalendar>
              }
            >
              <Chart
                name="interactiveLine"
                height={500}
                width={1300}
                dateList={[
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ]}
                priceList={[
                  0, 10, 20, 30, 40, 10, 30, 0, 10, 20, 30, 40, 10, 30, 0, 10,
                  20, 30, 40, 10, 30, 0, 10, 20, 30, 40, 10, 30,
                ]}
                gradient
              />
              <ResumeChartContainer>
                <RevenueText type="label-large">Total Revenue</RevenueText>
                <RevenueAmount type="h3">$76685.41</RevenueAmount>
                <PositivePercentage type="label-large">
                  {"7,00%"}
                </PositivePercentage>
              </ResumeChartContainer>
            </CardGraphic>
          </CardHistoryContainer>
        </LargeCellContainer>
      </BodyContainer>
    </ScreenContainer>
  );
}
