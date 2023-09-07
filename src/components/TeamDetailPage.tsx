import { styled } from 'styled-components';

function TeamMemberDetail() {
  return (
    <Container>
      <ContentWrapper>
        <Section>
          <Box>
            <AnotherBox>
              <ImageBox>
                <ImageCircle />
                <img
                  style={{ position: 'absolute', top: '1rem', width: '16rem' }}
                  src='jennifer.svg'
                />
              </ImageBox>
              <TextBox>
                <H1>Jennifer Techel</H1>
                <H2>Frontend developer</H2>
              </TextBox>
            </AnotherBox>

            <TextBox>
              <H3>CONTACT</H3>
              <BasicText>Email: jennifer@sage.com </BasicText>
              <BasicText>Phone: 0762009010 </BasicText>
            </TextBox>
          </Box>
          <Box>
            <TextBox>
              <H3>ABOUT</H3>
              <BasicText>Some skills here. </BasicText>
            </TextBox>
            <TextBox>
              <H3>SKILLS</H3>
              <BasicText>Some skills here. </BasicText>
              <BasicText>Some skills here. </BasicText>
              <BasicText>Some skills here. </BasicText>
            </TextBox>
          </Box>
        </Section>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f0eee8;
  height: calc(100vh);
  padding: 2rem 0 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AnotherBox = styled.div``;

const ImageBox = styled.div`
  position: relative;
  align-self: center;
  padding-bottom: 1rem;
`;

const ImageCircle = styled.div`
  border-radius: 50%;
  border: #eca579 1.4rem solid;
  height: 15rem;
  width: 15rem;
`;

const TextBox = styled.div``;

const H1 = styled.h1``;

const H2 = styled.h2`
  font-weight: 400;
`;

const H3 = styled.h2``;

const BasicText = styled.p`
  margin: 0;
  padding-bottom: 1rem;
`;

export default TeamMemberDetail;
