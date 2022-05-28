import React from "react";
import styled from "styled-components/native";
import { Text, View, ViewCard } from "../Themed";

export const CardContainer = styled(ViewCard)`
  padding: 16px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${"#e6e6e6"};
  elevation: 10;
  z-index: 10;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const CardTitle = styled(Text)`
  font-weight: 700;
  line-height: 20px;
  color: ${"#171725"};
`;

export const ActionsContainer = styled(View)`
  flex-direction: row;
`;

export const ChildContainer = styled(View)``;
