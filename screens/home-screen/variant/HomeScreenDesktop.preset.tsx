import React from "react";
import styled from "styled-components/native";
import { Text, ViewContainer, Screen } from "../../../components/Themed";
import { Card } from "../../../components/card/card";

export const ScreenContainer = styled(Screen)``;

export const HeaderContainer = styled(ViewContainer)`
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 25px;
`;

export const LogoContainer = styled(ViewContainer)`
  flex-direction: row;
`;

export const ActionsContainer = styled(ViewContainer)`
  flex-direction: row;
`;

export const TitleLogo = styled(Text)`
  flex: 1;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: ${"#4A35C5"};
`;

export const BodyContainer = styled(ViewContainer)`
  flex-direction: row;
  padding: 24px 25px 30px 25px;
`;

export const TitleContainer = styled(ViewContainer)`
  padding: 18px 25px;
`;

export const TitleTransaction = styled(Text)`
  font-weight: 500;
  line-height: 40px;
`;

export const BodyTransaction = styled(Text)`
  font-weight: 500;
  line-height: 24px;
`;

export const SmallCellContainer = styled(ViewContainer)`
  flex: 3;
`;

export const CardResumeContainer = styled(ViewContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallCard = styled(Card)`
  min-width: 150px;
  min-height: 145px;
`;

export const StageTextCard = styled(Text)`
  color: ${"#6979F8"};
  font-weight: 500;
  text-align: center;
  line-height: 60px;
`;

export const LabelTextCard = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

export const CardPieContainer = styled(ViewContainer)`
  margin-top: 15px;
`;

export const CardHistoryContainer = styled(ViewContainer)``;

export const CardGraphic = styled(Card)`
  min-height: 325px;
`;

export const PieChartWrapper = styled(ViewContainer)`
  padding-top: 32px;
  padding-bottom: 48px;
`;

export const LargeCellContainer = styled(ViewContainer)`
  flex: 8;
  margin-left: 22px;
`;
