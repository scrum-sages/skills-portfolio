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
  clickHandler: (link: string) => void;
}

export function NavLink({ $link, color, clickHandler }: NavLinkProps) {
  return (
    <StyledNavLink
      color={color}
      $link={$link}
      onClick={() => {
        clickHandler($link);
      }}
    >
      {$link}
    </StyledNavLink>
  );
}
