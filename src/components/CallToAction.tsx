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
  display: flex;
  flex-direction: column;

  width: 100%;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
