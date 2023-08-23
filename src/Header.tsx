import { useState } from "react";
import styled from "styled-components";

interface IconProps {
  $clicked: boolean;
  
}

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <h2>Scrum Sages</h2>
        <MenuWrapper onClick={handleClick}>
          <Icon $clicked={click}></Icon>
        </MenuWrapper>
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
  background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrapper = styled.div`
  height: 100%;
  width: 2rem;
  background: green;
  position: relative;
`;

const Icon = styled.span<IconProps>`
  position: absolute;
  top: 1.4rem;
  background-color: ${(props) => (props.$clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2.5px;
  display: inline-block;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2.5px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
  &::before {
    top: ${(props) => (props.$clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.$clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.$clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
