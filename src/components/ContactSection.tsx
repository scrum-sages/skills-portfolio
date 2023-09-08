import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import Address from './Address';
import { ContactForm } from './Form';
import Map from './Map';
import { SectionHeadline } from './SectionHeadline';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

export function ContactSection({ navRef }: Props) {
  return (
    <Contact ref={navRef}>
      <ContactWrapper className='parent'>
        <ContactBoxSection className='animate-text'>
          <SectionHeadline $color='white' title='FIND US'></SectionHeadline>
          <ContactSectionWrapper>
            <Address></Address>
            <MapWrapper>
              <Map />
            </MapWrapper>
          </ContactSectionWrapper>
        </ContactBoxSection>
        <ContactBoxSection className='animate-text'>
          <SectionHeadline $color='white' title='TALK TO US'></SectionHeadline>
          <ContactSectionWrapper>
            <ContactForm></ContactForm>
          </ContactSectionWrapper>
        </ContactBoxSection>
      </ContactWrapper>
    </Contact>
  );
}

const Contact = styled.section`
  width: 100%;
  display: flex;
  background: black;
  justify-content: center;
  @media (min-width: 768px) {
    min-height: 44rem;
  }
`;
const ContactWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 0 0.6rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ContactBoxSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 50rem;
  height: 90vh;
`;

const MapWrapper = styled.div`
  height: 18rem;
  width: 100%;
  @media (min-width: 768px) {
    height: 25rem;
  }
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 64px;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding-top: 2rem;
  }
`;
