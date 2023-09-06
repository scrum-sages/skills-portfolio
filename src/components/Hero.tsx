import styled from 'styled-components';
import CallToAction from './CallToAction';
import HeroPattern from './HeroPattern';

interface Props {
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ contactRef }: Props) {
  return (
    <HeroSection>
      <HeroContainer>
        <LeftSection>
          <Headline>Developing the web with widsom and expertise.</Headline>
          <CallToAction contactRef={contactRef} />
        </LeftSection>
        <HeroPattern />
      </HeroContainer>
    </HeroSection>
  );
}

const HeroContainer = styled.div`
  position: relative;

  height: clamp(20rem, 70vh, 100%);
  width: clamp(20rem, 70%, 100%);
  max-width: 1440px;

  display: flex;
  gap: 2rem;

  margin: 4rem 1rem 1rem;
  padding-bottom: 1rem;
`;

const HeroSection = styled.div`
  background-color: #f0eee8;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 95vh;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 61.8%;
`;

const Headline = styled.h1`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
`;
