import React from "react";
import Chart from "../../../components/chart/chart";
import { PieChart } from "../../../components/chart/pie.chart";
import Icon from "../../../components/icon/icon";
import { RootTabScreenProps } from "../../../types";
import {
  ActionsContainer,
  BodyContainer,
  BodyTransaction,
  CardGraphic,
  CardHistoryContainer,
  CardPieContainer,
  CardResumeContainer,
  HeaderContainer,
  LabelTextCard,
  LargeCellContainer,
  LogoContainer,
  PieChartWrapper,
  ScreenContainer,
  SmallCard,
  SmallCellContainer,
  StageTextCard,
  TitleContainer,
  TitleLogo,
  TitleTransaction,
} from "./HomeScreenDesktop.preset";

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
            <CardGraphic title="Transactions last year">
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
            <CardGraphic title="Transactions last year"></CardGraphic>
          </CardHistoryContainer>
        </LargeCellContainer>
      </BodyContainer>
    </ScreenContainer>
  );
}
