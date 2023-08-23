import { useState } from "react";
import styled from "styled-components";
import { Burger } from "./Burger";

export function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoWrapper>
          <h2>Scrum Sages</h2>
        </LogoWrapper>
        <NavigationWrapper>
          <NavLink>Link</NavLink>
          <NavLink>Link</NavLink>
          <NavLink>Link</NavLink>
        </NavigationWrapper>
        <Burger $clicked={burgerClicked} onClick={handleBurgerClick} />
      </HeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: red;
  height: 3rem;
  display: flex;
  justify-content: center;
`;
const HeaderWrapper = styled.div`
  max-width: 1440px;
  background: #181818;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  height: 100%;
  color: white;
  margin-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationWrapper = styled.nav`
  width: 25%;

  height: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.span`
  color: white;
`;
