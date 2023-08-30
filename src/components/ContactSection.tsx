import styled from 'styled-components';
import Map from './Map';

export function ContactSection() {
  return (
    <Contact>
      <ContactWrapper>
        <MapSection>
          <h1>FIND US</h1>
          <address>
            <p>Medieinstitutet Gothenburg</p>
            <p>Anders Personsgatan 18</p>
            <p>416 64 Göteborg</p>
          </address>
          <MapWrapper>
            <Map />
          </MapWrapper>
        </MapSection>
        <FormSection>
          <h1>TALK TO US</h1>

          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
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

const MapSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: green;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 40rem;
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

const SectionHeadLine = styled.h2``
`