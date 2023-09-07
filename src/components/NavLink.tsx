import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface StyledNavLinkProps {
  $link: string;
  color: string;
}

const StyledNavLink = styled.span<StyledNavLinkProps>`
  cursor: pointer;
  color: ${props => props.color}; // Apply the color prop to the text color
  font-weight: 500;
`;

interface NavLinkProps {
  $link: string;
  color: string;
  navRef?: React.RefObject<HTMLDivElement>;
}

export function NavLink({ $link, color, navRef }: NavLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledNavLink
      color={color}
      $link={$link}
      onClick={() => {
        if (!navRef) return;
        location.pathname.includes('/teammember/')
          ? navigate(`/${$link.toLowerCase()}`)
          : navRef.current?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {$link}
    </StyledNavLink>
  );
}
