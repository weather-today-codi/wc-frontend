import React, { forwardRef } from "react";
import * as S from "./styled";

export interface CardProps {
  ImageSource: string;
  text: string;
  startFlowOnClick?: React.ReactEventHandler;
}

export const CardButton = forwardRef<HTMLButtonElement, CardProps>(
  (props, ref) => {
    return (
      <S.CardElement ref={ref} {...props} onClick={props.startFlowOnClick}>
        <S.CardInner>
          <S.CardImage src={props.ImageSource} />
          <S.CardText>{props.text}</S.CardText>
        </S.CardInner>
      </S.CardElement>
    );
  }
);
