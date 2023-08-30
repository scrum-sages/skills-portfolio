import styled from 'styled-components';
import Map from './Map';
import InputField from './inputField';

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
            <InputContainer>
              <InputField label='Your name:' type='text' />
              <InputField label='Your email:' type='text' />
              <InputField label='Dropdown' type='text' />
              <InputField label='Your message here:' type='textarea' rows={4} />
            </InputContainer>
            <Button>SEND</Button>
          </ContactSectionWrapper>
        </FormSection>
      </ContactWrapper>
    </Contact>
  );
}

const InputContainer = styled.div`
  padding: 0 0.2rem;
`;

const Button = styled.button`
  color: black;
  background-color: #eca579;
  padding: 0.6rem;
  border: none;
`;

const Contact = styled.section`
  margin-top: 3rem;
  height: auto;
  width: 100%;
  display: flex;
  background: black;
  justify-content: center;
`;
const ContactWrapper = styled.div`
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

  @media (min-width: 768px) {
    height: 36rem;
  }
`;

const MapWrapper = styled.div`
  height: 18rem;
  width: 100%;
  @media (min-width: 768px) {
    height: 25rem;
  }
`;

const SectionHeadline = styled.h2`
  font-size: 2.2rem;
  margin: 0.6rem 0rem;
  color: white;
`;

const AdressWrapper = styled.address`
  margin: 0;
  p {
    margin: 0.35rem;
    color: white;
  }
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: space-between;
  height: 100%;
  @media (min-width: 768px) {
    padding-top: 2rem;
  }
`;
