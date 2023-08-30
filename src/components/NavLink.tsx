import styled from 'styled-components';

interface Link {
  link: string;
  color: string;
}

const StyledNavLink = styled.span<Link>`
  cursor: pointer;
  color: ${props => props.color}; // Apply the color prop to the text color
`;

export function NavLink({ link, color }: Link) {
  return (
    <StyledNavLink color={color} link={link}>
      {link}
    </StyledNavLink>
  );
}
