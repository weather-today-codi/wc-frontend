import { NavbarMeta } from "@/components/common/Navbar";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

export const navbar: NavbarMeta[] = [
  {
    icon: faHome,
    text: "홈",
    path: "/",
  },
  {
    icon: faUser,
    text: "프로필",
    path: "/profile",
  },
];

// faChevronLeft
