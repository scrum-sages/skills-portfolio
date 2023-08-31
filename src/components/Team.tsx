import { styled } from 'styled-components';

function Team() {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>MEET THE TEAM</h2>
      <TeamSection>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '3rem', left: '2rem' }} src='jennifer.svg' />
          </ImageBox>
          <Heading>Jennifer Techel</Heading>
          <BasicText>
            Meet Jennifer, a passionate and creative frontend developer with a penchant for crafting
            engaging and user-centric digital experiences.
          </BasicText>
          <MonoText>Frontend developer</MonoText>
          <MonoText>jennifer@sage.com</MonoText>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '3rem', left: '2rem' }} src='caisa.svg' />
          </ImageBox>
          <Heading>Caisa Köhlin</Heading>
          <BasicText>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </BasicText>
          <MonoText>Frontend developer</MonoText>
          <MonoText>caisa@sage.com</MonoText>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '3.2rem', left: '2rem' }} src='nat.svg' />
          </ImageBox>
          <Heading>Nathanael Blackbourn</Heading>
          <BasicText>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </BasicText>
          <MonoText>Frontend developer</MonoText>
          <MonoText>nathanael@sage.com</MonoText>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '1.8rem', left: '0.5rem' }} src='mimmi.svg' />
          </ImageBox>
          <Heading>Mimmi Collin</Heading>
          <BasicText>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </BasicText>
          <MonoText>Frontend developer</MonoText>
          <MonoText>mimmi@sage.com</MonoText>
        </TeamMemberBox>
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
  justify-content: space-evenly;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
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
  padding: 0 4rem 0 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  @media (max-width: 768px) {
    padding: 0 1rem 0 1rem;
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
