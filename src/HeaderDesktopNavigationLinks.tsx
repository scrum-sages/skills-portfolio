import styled from "styled-components";

export function HeaderDesktopNavigationLinks() {
  return (
    <NavigationWrapper>
      <NavLink>Link</NavLink>
      <NavLink>Link</NavLink>
      <NavLink>Link</NavLink>
    </NavigationWrapper>
  );
}

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
  cursor: pointer;
`;
