import styled from 'styled-components';
import Address from './Address';
import Button from './Button';
import Map from './Map';
import { SectionHeadline } from './SectionHeadline';
import InputField from './inputField';

export function ContactSection() {
  return (
    <Contact>
      <ContactWrapper>
        <ContactBoxSection>
          <SectionHeadline $color='white' title='FIND US'></SectionHeadline>
          <ContactSectionWrapper>
            <Address></Address>
            <MapWrapper>
              <Map />
            </MapWrapper>
          </ContactSectionWrapper>
        </ContactBoxSection>
        <ContactBoxSection>
          <SectionHeadline $color='white' title='TALK TO US'></SectionHeadline>
          <ContactSectionWrapper>
            <InputContainer>
              <InputField label='Your name:' type='text' />
              <InputField label='Your email:' type='text' />
              <InputField
                label='Which of us would you like to speak to?'
                type='dropdown'
                options={[
                  'Jennifer Techel',
                  'Caisa Köhlin',
                  'Nathanael Blackbourn',
                  'Mimmi Collin',
                ]}
              />
              <InputField label='Your message here:' type='textarea' rows={4} />
            </InputContainer>
            <Button text='SEND' width='100%' color='black' backgroundColor='#eca579' />
          </ContactSectionWrapper>
        </ContactBoxSection>
      </ContactWrapper>
    </Contact>
  );
}

const Contact = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  background: black;
  justify-content: center;
  @media (min-width: 768px) {
    height: 100vh;
    min-height: 44rem;
  }
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

const ContactBoxSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30rem;
  @media (min-width: 768px) {
    height: 38rem;
  }
`;

const MapWrapper = styled.div`
  height: 18rem;
  width: 100%;
  @media (min-width: 768px) {
    height: 25rem;
  }
`;

const InputContainer = styled.div`
  padding: 0 0.2rem;
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
