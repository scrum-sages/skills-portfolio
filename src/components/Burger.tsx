import styled from 'styled-components';
import { headerTextColor } from './data';

interface BurgerProps {
  $clicked: boolean;
  onClick: () => void;
  color: string;
}

export function Burger({ $clicked, onClick }: BurgerProps) {
  const color = headerTextColor;
  return (
    <BurgerWrapper onClick={onClick}>
      <StyledBurger $clicked={$clicked} color={color} />
    </BurgerWrapper>
  );
}

const BurgerWrapper = styled.div`
  height: 100%;
  margin-right: 0.6rem;
  width: 1.7rem;
  position: relative;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledBurger = styled.span<{ $clicked: boolean }>`
  position: absolute;
  border-radius: 1rem;
  top: 1.4rem;
  background-color: ${props => (props.$clicked ? 'transparent' : props.color)};
  width: 1.7rem;
  height: 3px;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    background-color: ${props => props.color};
    border-radius: 1rem;
    width: 1.7rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
  &::before {
    height: ${props => (props.$clicked ? '4px' : '3px')};
    top: ${props => (props.$clicked ? '0' : '-0.6rem')};
    transform: ${props => (props.$clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    height: ${props => (props.$clicked ? '4px' : '3px')};
    top: ${props => (props.$clicked ? '0' : '0.6rem')};
    transform: ${props => (props.$clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;
