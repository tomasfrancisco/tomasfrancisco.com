import React from "react";
import { DesktopNavbar, MobileNavbar } from "src/components";
import { useScreenWidth } from "src/hooks/use-resizer";
import { useScrollTop } from "src/hooks/use-scroller";

export const Navbar: React.FC = () => {
  const scrollTop = useScrollTop();
  const screenWidth = useScreenWidth();

  return screenWidth < 768 ? (
    <MobileNavbar scrollTop={scrollTop} />
  ) : (
    <DesktopNavbar scrollTop={scrollTop} />
  );
};
