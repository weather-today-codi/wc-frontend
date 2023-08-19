import React, { forwardRef } from "react";

import * as S from "./styled";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NavbarMeta {
  icon: IconProp;
  text: string;
  path: string;
}

export interface NavbarProps {
  navbarButtonArray: NavbarMeta[];
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  props = {
    ...props,
  };
  return (
    <S.NavbarElement ref={ref}>
      <S.NavbarUnOrderList>
        {props.navbarButtonArray.map((menu, index) => (
          <ul key={index}>
            <S.NavbarMenu to={menu.path}>
              <FontAwesomeIcon icon={menu.icon} size="lg" />
              <S.NavbarText>{menu.text}</S.NavbarText>
            </S.NavbarMenu>
          </ul>
        ))}
      </S.NavbarUnOrderList>
    </S.NavbarElement>
  );
});
