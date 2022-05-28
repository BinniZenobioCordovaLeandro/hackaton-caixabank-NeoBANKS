import React from "react";
import styled from "styled-components/native";
import { Text, View, Screen } from "../../components/Themed";

export const ScreenContainer = styled(Screen)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled(View)`
  margin-vertical: 30px;
  height: 1px;
  width: 80px;
`;

export const TitleLogo = styled(Text)`
  font-weight: bold;
  color: #4A35C5};
`;

export const TitleContainer = styled(Screen)`
  align-items: center;
  justify-content: center;
`;

export const TitleTransaction = styled(Text)`
  font-weight: bold;
`;

export const BodyTransaction = styled(Text)`
  font-weight: bold;
`;
