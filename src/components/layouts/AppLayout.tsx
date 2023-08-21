import React from "react";
import styled from "@emotion/styled";

import { Navbar } from "../common/Navbar";

import { navbar } from "@/constants/navbar";
import { Container } from "./Container";

import WCLogo from "@/assets/WC64.png";

const AppMainContainer = styled.main`
  flex: 1 1 auto;
  padding: 4.9rem 2.4rem 2.4rem;
  overflow: hidden;
`;

const AppLogoImage = styled.img`
  width: 2.8rem;
`;

const AppChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.2rem;
`;

interface AppLayoutProps {
  children?: React.ReactNode;
}

const NavbarByExperience: React.FC = () => {
  if (localStorage.getItem("flow") === "start")
    return <Navbar navbarButtonArray={navbar} />;
  else return <div></div>;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Container>
      <AppMainContainer>
        <AppLogoImage src={WCLogo} />
        <AppChildrenContainer>{children}</AppChildrenContainer>
      </AppMainContainer>
      <NavbarByExperience />
    </Container>
  );
};
