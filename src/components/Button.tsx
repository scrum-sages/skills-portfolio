import styled from 'styled-components';

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.6rem;
  border: none;
  transition: 0.2s ease-in-out;
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
      text={props.text}
      color={props.color}
      width={props.width}
      backgroundColor={props.backgroundColor}
    >
      <p>{props.text}</p>
    </StyledButton>
  );
}

export default Button;
