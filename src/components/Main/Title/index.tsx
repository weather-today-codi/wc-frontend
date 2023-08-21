import React from "react";
import styled from "@emotion/styled";

export const TitleText = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
`;

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <TitleText>{children}</TitleText>
);
