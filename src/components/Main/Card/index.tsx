import React from "react";
import * as S from "./styled";

export interface CardProps {
  ImageSource: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ ImageSource, text }) => {
  return (
    <S.CardElement>
      <S.CardInner>
        <S.CardImage src={ImageSource} />
        <S.CardText>{text}</S.CardText>
      </S.CardInner>
    </S.CardElement>
  );
};
