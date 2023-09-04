import styled from 'styled-components';
import ContactButton from './ContactButton';

interface Props {
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function CallToAction({ contactRef }: Props) {
  return (
    <Container>
      <h3>Meet your next collaborator:</h3>
      <ContactButton contactRef={contactRef} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: #f0eee8;

  width: clamp(300px, 30vw, 100%);
  padding: 0 1rem 1rem 1rem;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }

  h3 {
    font-weight: 400;
  }
`;
