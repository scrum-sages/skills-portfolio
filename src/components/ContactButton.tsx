import styled from 'styled-components';

interface ContactButtonProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function ContactButton({ contactRef }: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return <StyledContactButton onClick={handleClick}>Contact us</StyledContactButton>;
}

const StyledContactButton = styled.button`
  border: none;
  background-color: #eca579;

  width: 100%;
  padding: 0.5rem;
  border-radius: 9999px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: Medium;
  font-size: 1.2rem;

  cursor: pointer;

  transition: all 0.1s linear;

  &:hover {
    background-color: black;
    color: #f0eee8;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
