import { styled } from 'styled-components';
import { SectionHeadline } from './SectionHeadline';

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

function Team({ navRef }: Props) {
  return (
    <Container ref={navRef}>
      <ContentWrapper>
        <SectionHeadline $color='white' title='MEET THE TEAM'></SectionHeadline>
        <TeamSection>
          <TeamSectionBox>
            <TeamMemberBox>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '2rem', left: '1rem', width: '12.7rem' }}
                  src='jennifer.svg'
                />
              </ImageBox>
              <Heading>Jennifer Techel</Heading>
              <BasicText>
                Meet Jennifer, a passionate and creative frontend developer with a penchant for
                crafting engaging and user-centric digital experiences.
              </BasicText>
              <MonoText>Frontend developer</MonoText>
              <MonoText>jennifer@sage.com</MonoText>
            </TeamMemberBox>
            <TeamMemberBox>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '2rem', left: '1rem', width: '11.3rem' }}
                  src='caisa.svg'
                />
              </ImageBox>
              <Heading>Caisa Köhlin</Heading>
              <BasicText>
                Caisa is a dynamic front-end developer committed to blending cutting-edge design
                with seamless functionality.
              </BasicText>
              <MonoText>Frontend developer</MonoText>
              <MonoText>caisa@sage.com</MonoText>
            </TeamMemberBox>
          </TeamSectionBox>
          <TeamSectionBox>
            <TeamMemberBox>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '2rem', left: '1rem', width: '11.3rem' }}
                  src='nat.svg'
                />
              </ImageBox>
              <Heading>Nathanael Blackbourn</Heading>
              <BasicText>
                Medium between man and machine, in his work Nathanael enriches the human experience
                and deepens our connection with technology.
              </BasicText>
              <MonoText>Frontend developer</MonoText>
              <MonoText>nathanael@sage.com</MonoText>
            </TeamMemberBox>
            <TeamMemberBox>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '0.75rem', width: '11rem' }}
                  src='mimmi.svg'
                />
              </ImageBox>
              <Heading>Mimmi Collin</Heading>
              <BasicText>
                Mimmi is a passionate artist, programmer, writer, and creator specializing in
                crafting stunning websites and captivating games.
              </BasicText>
              <MonoText>Frontend developer</MonoText>
              <MonoText>mimmi@sage.com</MonoText>
            </TeamMemberBox>
          </TeamSectionBox>
        </TeamSection>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: left;
  color: white;
  height: calc(100vh - 4rem);
  min-height: 700px;
  @media (max-width: 1024px) {
    height: auto;
    min-height: auto;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 6rem 0rem;
  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 2rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 0rem;
  }
`;

const TeamSection = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 30rem;
  }
`;

const TeamSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 50%;
  }
`;

const ImageCircle = styled.div`
  border-radius: 50%;
  border: #eca579 1.4rem solid;
  height: 13rem;
  width: 13rem;
  @media (max-width: 768px) {
  }
`;

const TeamMemberBox = styled.div`
  padding: 1rem 0.9rem;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
  &:hover ${ImageCircle} {
    transition: 100ms ease-in;
    background-color: #eca579;
  }
`;

const ImageBox = styled.div`
  position: relative;
  align-self: center;
  padding-bottom: 0.8rem;
`;

const Heading = styled.h3`
  font-weight: 400;
`;

const BasicText = styled.p`
  margin: 0;
  padding-bottom: 1rem;
`;

const MonoText = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  margin: 0;
  padding-top: 0.2rem;
`;

export default Team;
