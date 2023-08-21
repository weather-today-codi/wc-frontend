import React from "react";

import * as S from "./styled";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonCustomProps {
  size?: ButtonSize;
  children: React.ReactNode;
}

export type ButtonProps = ButtonCustomProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    return <S.ButtonElement ref={ref}>{children}</S.ButtonElement>;
  }
);

Button.displayName = "Button";

export { Button };
