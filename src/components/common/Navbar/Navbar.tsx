import { forwardRef } from "react";
import { NavbarProps } from "./NavbarImpl";
import { NavbarFirstFlow } from "./NavbarFirstFlow";

export class NavbarContainer {
  private static comp: typeof NavbarFirstFlow = NavbarFirstFlow;

  private constructor() {}

  static setComponent(comp: typeof NavbarFirstFlow) {
    NavbarContainer.comp = comp;
  }

  static getComponent(): typeof NavbarFirstFlow {
    return NavbarContainer.comp;
  }
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  const Comp = NavbarContainer.getComponent();

  return <Comp ref={ref} {...props} />;
});
