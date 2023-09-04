import { styled } from 'styled-components';

function Team() {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>MEET THE TEAM</h2>
      <TeamSection>
        <TeamSectionBox>
          <TeamMemberBox>
            <ImageBox>
              <ImageCircle />
              <img style={{ position: 'absolute', top: '2rem', left: '1rem' }} src='jennifer.svg' />
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
              <img style={{ position: 'absolute', top: '2rem', left: '1rem' }} src='caisa.svg' />
            </ImageBox>
            <Heading>Caisa Köhlin</Heading>
            <BasicText>
              Caisa is a dynamic front-end developer committed to blending cutting-edge design with
              seamless functionality.
            </BasicText>
            <MonoText>Frontend developer</MonoText>
            <MonoText>caisa@sage.com</MonoText>
          </TeamMemberBox>
        </TeamSectionBox>
        <TeamSectionBox>
          <TeamMemberBox>
            <ImageBox>
              <ImageCircle />
              <img style={{ position: 'absolute', top: '2rem', left: '1rem' }} src='nat.svg' />
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
              <img style={{ position: 'absolute', top: '0.75rem' }} src='mimmi.svg' />
            </ImageBox>
            <Heading>Mimmi Collin</Heading>
            <BasicText>
              Mimmi - a passionate artist, programmer, writer, and creator. She specializes in
              crafting stunning websites and captivating games.
            </BasicText>
            <MonoText>Frontend developer</MonoText>
            <MonoText>mimmi@sage.com</MonoText>
          </TeamMemberBox>
        </TeamSectionBox>
      </TeamSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  background: black;
  text-align: left;
  color: white;
  padding: 2rem 0 6rem 0;
`;

const TeamSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
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
  border: #eca579 0.75rem solid;
  height: 11rem;
  width: 11rem;
`;

const TeamMemberBox = styled.div`
  color: white;
  padding: 0 2rem 2rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 4rem 2rem 4rem;
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  &:hover ${ImageCircle} {
    background-color: #eca579;
  }
`;

const ImageBox = styled.div`
  position: relative;
  align-self: center;
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
