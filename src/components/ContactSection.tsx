import styled from 'styled-components';
import Map from './Map';

export function ContactSection() {
  return (
    <Contact>
      <ContactWrapper>
        <FormSection>
          <SectionHeadline>FIND US</SectionHeadline>
          <ContactSectionWrapper>
            <AdressWrapper>
              <p>Medieinstitutet Gothenburg</p>
              <p>Anders Personsgatan 18</p>
              <p>416 64 Göteborg</p>
            </AdressWrapper>
            <MapWrapper>
              <Map />
            </MapWrapper>
          </ContactSectionWrapper>
        </FormSection>
        <FormSection>
          <SectionHeadline>TALK TO US</SectionHeadline>
          <ContactSectionWrapper>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </ContactSectionWrapper>
        </FormSection>
      </ContactWrapper>
    </Contact>
  );
}

const Contact = styled.section`
  margin-top: 3rem;
  height: auto;
  width: 100%;
  display: flex;
  background: red;
  justify-content: center;
`;
const ContactWrapper = styled.div`
  background: blue;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30rem;
  background-color: #ffd727;
  @media (min-width: 768px) {
    height: 40rem;
  }
`;

const MapWrapper = styled.div`
  height: 20rem;
  width: 100%;
  @media (min-width: 768px) {
    height: 29rem;
  }
`;

const SectionHeadline = styled.h2`
  font-size: 2.2rem;
  margin: 0.6rem 0rem;
  background-color: #ff6600;
  color: white;
`;

const AdressWrapper = styled.address`
  background-color: red;
  margin: 0;
  p {
    margin: 0.35rem; /* Add some spacing between each <p> element */
    color: white; /* Change the text color for better visibility on red background */
  }
`;

const ContactSectionWrapper = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
