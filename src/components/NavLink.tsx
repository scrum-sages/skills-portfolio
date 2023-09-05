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
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    navRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledNavLink color={color} $link={$link} onClick={handleClick}>
      {$link}
    </StyledNavLink>
  );
}
