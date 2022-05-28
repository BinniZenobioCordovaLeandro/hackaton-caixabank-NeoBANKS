import React from "react";
import {
  ActionsContainer,
  CardContainer,
  CardTitle,
  ChildContainer,
  TitleContainer,
} from "./card.preset";
import { CardProps } from "./card.props";

export const Card = (props: CardProps) => {
  const {
    title,
    titleType = "title",
    children,
    actions,
    onlyContent = false,
    type = "shadow",
  } = props;

  return (
    <CardContainer
      style={{
        shadowOffset: { width: 11, height: 11 },
      }}
      {...props}
    >
      {!onlyContent && (
        <TitleContainer>
          <CardTitle type={titleType}>{title}</CardTitle>
          <ActionsContainer>{actions}</ActionsContainer>
        </TitleContainer>
      )}
      <ChildContainer>{children}</ChildContainer>
    </CardContainer>
  );
};
