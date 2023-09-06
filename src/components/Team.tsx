import { styled } from 'styled-components';
import { SectionHeadline } from './SectionHeadline';
import { TeamMembers } from './TeamData';

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

function Team({ navRef }: Props) {
  return (
    <Container ref={navRef}>
      <ContentWrapper>
        <SectionHeadline $color='white' title='MEET THE TEAM'></SectionHeadline>
        <TeamSection>
          {TeamMembers.map((team, index) => (
            <TeamMemberBox key={index}>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '2rem', left: '1rem', width: '12.7rem' }}
                  src={team.imageURL}
                />
              </ImageBox>
              <Heading>{team.name}</Heading>
              <BasicText>{team.bio}</BasicText>
              <MonoText>{team.title}</MonoText>
              <MonoText>{team.email}</MonoText>
            </TeamMemberBox>
          ))}
        </TeamSection>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  height: calc(100vh);
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
  align-items: center;
  padding: 0.5rem 0rem;
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
    height: auto;
    width: 50%;
  }
  @media (min-width: 1024px) {
    height: 30rem;
    width: 25%;
  }

  &:hover ${ImageCircle} {
    transition: 100ms ease-in;
    background-color: #eca579;
  }
`;

const ImageBox = styled.div`
  position: relative;
  align-self: center;
  padding-bottom: 1rem;
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
