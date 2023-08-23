import React from "react";
import styled from "@emotion/styled";

export const TitleDescriptionText = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #898989;

  margin-top: 1.9rem;
`;

interface TitleDescriptionProps {
  children?: React.ReactNode;
}

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  children,
}) => <TitleDescriptionText>{children}</TitleDescriptionText>;
