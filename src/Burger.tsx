
const BurgerWrapper = styled.div`
  height: 100%;
  margin-right: 0.6rem;
  width: 1.7rem;
  background: green;
  position: relative;
`;

const Burger = styled.span<IconProps>`
  position: absolute;
  border-radius: 1rem;
  top: 1.4rem;
  background-color: ${(props) => (props.$clicked ? "transparent" : "black")};
  width: 1.7rem;
  height: 3px;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    background-color: black;
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
    top: ${(props) => (props.$clicked ? "0" : "-0.6rem")};
    transform: ${(props) => (props.$clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.$clicked ? "0" : "0.6rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
