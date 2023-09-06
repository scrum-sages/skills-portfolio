import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';
import { HeaderLogo } from './HeaderLogo';
import { NavLink } from './NavLink';
import { headerLinks, headerTextColor } from './data';

interface StyledHeaderProps {
  $expanded: boolean;
  $background: string;
}

interface HeaderProps {
  navRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export function Header({ navRefs }: HeaderProps) {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);

  //** Ändra denna färg för att ändra färg på både header samt drawer samtidigt.*/
  const background = '#f0eee8';

  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
    setExtendNavbar(!extendNavbar);
  };

  //** Stänger drawer automatiskt när fönster blir bredare än 700px.*/
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
    <StyledHeader $expanded={burgerClicked} $background={background}>
      <HeaderContentWrapper>
        <HeaderLogo />
        <HeaderNavigationWrapper>
          {headerLinks.map((link, index) => (
            <NavLink
              key={index}
              $link={link}
              color={headerTextColor}
              navRef={navRefs[link.toLowerCase()]}
            />
          ))}
        </HeaderNavigationWrapper>
        <Burger $clicked={burgerClicked} onClick={handleBurgerClick} color={headerTextColor} />
      </HeaderContentWrapper>
      <Drawer $expanded={burgerClicked} $background={background}>
        {
          <DrawerLinks onClick={handleBurgerClick}>
            {headerLinks.map((link, index) => (
              <NavLink
                key={index}
                $link={link}
                color={headerTextColor}
                navRef={navRefs[link.toLowerCase()]}
              />
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
  background: ${props => props.$background};
  height: ${props => (props.$expanded ? '20rem' : '3rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s ease-in-out;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: ${props => (props.$expanded ? '20rem' : '4rem')};
  }
`;

const HeaderContentWrapper = styled.div`
  max-width: 1400px;
  flex-shrink: 0;
  background: transparent;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    height: 4rem;
  }
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
  background: ${props => props.$background};
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
