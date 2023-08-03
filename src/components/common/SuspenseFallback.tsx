import React from "react";
import styled from "@emotion/styled";
import WC192 from "../../assets/WC192.png";

export const SuspenseImage = styled.img`
  margin: auto;
  width: 192px;
  height: 192px;
`;

export const SuspenseFallback: React.FC = () => {
  return <SuspenseImage src={WC192} />;
};
