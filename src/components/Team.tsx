import { styled } from 'styled-components';

function Team() {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>MEET THE TEAM</h2>
      <TeamSection>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '2.5rem', left: '1rem' }} src='caisa.png' />
          </ImageBox>
          <h3>Jennifer Techel</h3>
          <p>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </p>
          <p>Frontend developer</p>
          <p>jennifer@sage.com</p>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '2.5rem', left: '1rem' }} src='caisa.png' />
          </ImageBox>
          <h3>Caisa Köhlin</h3>
          <p>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </p>
          <p>Frontend developer</p>
          <p>caisa@sage.com</p>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '2.5rem', left: '1rem' }} src='caisa.png' />
          </ImageBox>
          <h3>Nathanael Blackbourn</h3>
          <p>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </p>
          <p>Frontend developer</p>
          <p>nathanael@sage.com</p>
        </TeamMemberBox>
        <TeamMemberBox>
          <ImageBox>
            <ImageCircle />
            <img style={{ position: 'absolute', top: '2.5rem', left: '1rem' }} src='caisa.png' />
          </ImageBox>
          <h3>Mimmi Collin</h3>
          <p>
            Years of working with so and so and a specialty in so and so this team member loves so
            and so and is a vital member of our blah blah.
          </p>
          <p>Frontend developer</p>
          <p>mimmi@sage.com</p>
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
  padding: 2rem 0 2rem 0;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

const TeamMemberBox = styled.div`
  color: white;
  padding: 0 4rem 0 4rem;
  height: 100%;
`;

const ImageBox = styled.div`
  position: relative;
`;

const ImageCircle = styled.div`
  border-radius: 50%;
  border: #eca579 0.75rem solid;
  height: 11rem;
  width: 11rem;
`;

export default Team;
