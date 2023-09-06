import styled from 'styled-components';

interface ButtonProps {
  type: string;
  $text: string;
  width?: string;
  color?: string;
  $backgroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background: none;
  text-decoration: none;
  color: white;
  border: white 1px solid;
  border-radius: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  transition: 200ms ease-in;
  &:hover {
    border-color: #eca579;
    background: #eca579;
  }
  &:active {
    transform: scale(0.99);
  }
  p {
    margin: 0;
    font-weight: 500;
  }
`;

function Button(props: ButtonProps) {
  return (
    <StyledButton
      type={props.type}
      $text={props.$text}
      color={props.color}
      width={props.width}
      $backgroundColor={props.$backgroundColor}
    >
      <p>{props.$text}</p>
    </StyledButton>
  );
}

export default Button;
