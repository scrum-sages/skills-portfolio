import { useEffect, useState } from "react";
import styled from "styled-components";
import { Burger } from "./Burger";
import { HeaderDesktopNavigationLinks } from "./HeaderDesktopNavigationLinks";
import { HeaderLogo } from "./HeaderLogo";

interface StyledHeaderProps {
  $expanded: boolean;
}

export function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
    setExtendNavbar(!extendNavbar);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setBurgerClicked(false);
        setExtendNavbar(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledHeader $expanded={burgerClicked}>
      <HeaderContentWrapper>
        <HeaderLogo />
        <HeaderDesktopNavigationLinks />
        <Burger $clicked={burgerClicked} onClick={handleBurgerClick} />
      </HeaderContentWrapper>
      <Drawer $expanded={burgerClicked}>
        {/* Content for the drawer */}
        <DrawerLinks onClick={handleBurgerClick}>
          <span>Drawer Content 1</span>
          <span>Drawer Content 2</span>
          <span>Drawer Content 3</span>
        </DrawerLinks>
      </Drawer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header<StyledHeaderProps>`
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: #000000;
  height: ${(props) => (props.$expanded ? "15rem" : "3rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s ease-in-out;
  flex-direction: column;
`;

const HeaderContentWrapper = styled.div`
  max-width: 1440px;
  flex-shrink: 0;
  background: #000000;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Drawer = styled.div<StyledHeaderProps>`
  height: ${(props) => (props.$expanded ? "15rem" : "0")};
  background-color: #000000;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const DrawerLinks = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
