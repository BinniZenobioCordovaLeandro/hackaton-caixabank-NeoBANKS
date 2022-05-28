import React from "react";
import styled from "styled-components/native";
import { Text, ViewContainer, Screen, Button } from "../../components/Themed";
import { Card } from "../../components/card/card";
import { TouchableWithoutFeedback } from "react-native";

export const ScreenContainer = styled(Screen)`
  padding: 0px 25px;
`;

export const LogoContainer = styled(ViewContainer)`
  flex-direction: row;
  margin-top: 20px;
`;

export const TitleLogo = styled(Text)`
  flex: 1;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: ${"#4A35C5"};
`;

export const TitleContainer = styled(ViewContainer)`
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;

export const TitleTransaction = styled(Text)`
  font-weight: 500;
  line-height: 40px;
`;

export const BodyTransaction = styled(Text)`
  font-weight: 500;
  line-height: 24px;
`;

export const CardResumeContainer = styled(ViewContainer)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
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

export const CardHistoryContainer = styled(ViewContainer)`
  flex-direction: row;
  margin-top: 37px;
  margin-bottom: 100px;
`;

export const TabsContainer = styled(ViewContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

export const TabButton = styled(Button)`
  min-width: 100px;
`;

export const TabText = styled(Text)`
  color: ${"#6979F8"};
`;

export const CardGraphic = styled(Card)`
  flex: 1;
  min-height: 325px;
`;
