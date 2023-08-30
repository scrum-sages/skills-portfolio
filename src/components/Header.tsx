import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';
import { HeaderLogo } from './HeaderLogo';
import { NavLink } from './NavLink';
import { headerLinks, headerTextColor } from './data';

interface StyledHeaderProps {
  $expanded: boolean;
  background: string;
}

export function Header() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);

  const background = 'white';

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledHeader $expanded={burgerClicked} background={background}>
      <HeaderContentWrapper>
        <HeaderLogo />
        <HeaderNavigationWrapper>
          {headerLinks.map((link, index) => (
            <NavLink key={index} link={link} color={headerTextColor} />
          ))}
        </HeaderNavigationWrapper>
        <Burger $clicked={burgerClicked} onClick={handleBurgerClick} color={headerTextColor} />
      </HeaderContentWrapper>
      <Drawer $expanded={burgerClicked} background={background}>
        {
          <DrawerLinks onClick={handleBurgerClick}>
            {headerLinks.map((link, index) => (
              <NavLink key={index} link={link} color={headerTextColor} />
            ))}
          </DrawerLinks>
        }
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
  background: ${props => props.background};
  height: ${props => (props.$expanded ? '20rem' : '3rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s ease-in-out;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const HeaderContentWrapper = styled.div`
  max-width: 1440px;
  flex-shrink: 0;
  background: transparent;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavigationWrapper = styled.nav`
  height: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const Drawer = styled.div<StyledHeaderProps>`
  height: ${props => (props.$expanded ? '20rem' : '0')};
  background: ${props => props.background};
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const DrawerLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;