import styled from 'styled-components';

interface SectionHeadlineProps {
  title: string;
  $color: string;
}

export function SectionHeadline(props: SectionHeadlineProps) {
  return <StyledHeadline color={props.$color}>{props.title}</StyledHeadline>;
}

const StyledHeadline = styled.h2`
  font-size: 2.2rem;
  margin: 0.6rem 0rem;
  color: ${props => props.color}; /* Accessing the color prop from props */
`;
