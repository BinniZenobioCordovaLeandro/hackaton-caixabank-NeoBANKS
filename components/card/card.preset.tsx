import React from "react";
import styled from "styled-components/native";
import { Text, ViewContainer, ViewCard } from "../Themed";
import { CardProps } from "./card.props";

export const CardContainer = styled(ViewCard)`
  padding: 16px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${"#e6e6e6"};
  ${(props: CardProps) =>
    props.type === "shadow" &&
    "box-shadow: 0px 16px 16px rgba(50, 50, 71, 0.08);"};
`;

export const TitleContainer = styled(ViewContainer)`
  flex-direction: row;
`;

export const CardTitle = styled(Text)`
  font-weight: 700;
  line-height: 20px;
  color: ${"#171725"};
`;

export const ActionsContainer = styled(ViewContainer)`
  flex-direction: row;
`;

export const ChildContainer = styled(ViewContainer)``;
