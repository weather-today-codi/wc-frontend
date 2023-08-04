import React from "react";
import styled from "@emotion/styled";

import { Navbar } from "../common/Navbar/Navbar";

import { navbar } from "../../constants/navbar";
import { Container } from "./Container";

const AppMainContainer = styled.main`
  flex: 1 1 auto;
  padding: 4.9rem 2.4rem 2.4rem;
  overflow: hidden;
`;

interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <AppMainContainer>{children}</AppMainContainer>
        <Navbar navbarArray={navbar} />
      </Container>
    </>
  );
};
