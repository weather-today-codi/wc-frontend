import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavbarElement = styled.nav`
  width: 100%;
  padding: 0 5rem 0 5rem;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const NavbarUnOrderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

export const NavbarMenu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  color: #898989;
  text-decoration: none;
  transition: color 200ms ease 0s;

  margin-top: 1.6rem;

  cursor: pointer;
  &:hover {
    color: #000;
  }

  &.active {
    color: #000 !important;
  }
`;

export const NavbarImage = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 auto;

  margin-top: 2.2rem;
`;
export const NavbarText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  margin-top: 0.5rem;
  margin-bottom: 2.3rem;
`;
