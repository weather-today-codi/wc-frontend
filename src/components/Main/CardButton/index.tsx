import React, { forwardRef } from "react";
import * as S from "./styled";

export interface CardProps {
  ImageSource: string;
  text: string;
  path: string;
}

export const CardButton = forwardRef<HTMLButtonElement, CardProps>((props) => {
  return (
    <S.CardElement to={props.path}>
      <S.CardInner>
        <S.CardImage src={props.ImageSource} />
        <S.CardText>{props.text}</S.CardText>
      </S.CardInner>
    </S.CardElement>
  );
});
