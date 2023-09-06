import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import styled from 'styled-components';
import Address from './Address';
import { ContactForm } from './Form';
import Map from './Map';
import { SectionHeadline } from './SectionHeadline';
import { fadeIn } from './animation';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

export function ContactSection({ navRef }: Props) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn({ parent: '.parent', child: '.animate-text' });
    });
    return () => ctx.revert();
  }, []);

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
  height: auto;
  width: 100%;
  display: flex;
  background: black;
  justify-content: center;
  @media (min-width: 768px) {
    height: calc(100vh - 4vh);
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
