import React, { forwardRef } from "react";
import { NavbarProps } from "./NavbarImpl";

export const NavbarFirstFlow = React.memo(
  forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
    return <div ref={ref}>ㅁㄴ</div>;
  })
);

NavbarFirstFlow.displayName = "NavbarFirstFlow";
