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
    alignTitle = "center",
  } = props;

  return (
    <CardContainer {...props}>
      {!onlyContent && (
        <TitleContainer style={{ justifyContent: alignTitle }}>
          <CardTitle type={titleType}>{title}</CardTitle>
          {actions && <ActionsContainer>{actions}</ActionsContainer>}
        </TitleContainer>
      )}
      <ChildContainer>{children}</ChildContainer>
    </CardContainer>
  );
};
