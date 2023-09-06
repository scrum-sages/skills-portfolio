import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
} from '@tabler/icons-react';
import styled from 'styled-components';
import logoSvg from '../assets/HeaderLogo.svg';
import { NavLink } from './NavLink';
import { footerLinks, headerLinks, headerTextColor } from './data';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 38rem;
  background-color: #f0eee8;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 12rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FirstSection = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SecondSection = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;

  justify-content: flex-start;
  height: 6rem;
  @media (min-width: 768px) {
    justify-content: end;
    width: 25%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const LogoImage = styled.img`
  height: 3rem;
  @media (min-width: 877px) {
    height: 3.5rem;
  }
  @media (min-width: 1200px) {
    height: 4.3rem;
  }
`;

const LinkContainer = styled.div`
  height: 7rem;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
    width: 30%;
  }
`;
const SocialMediaLinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: 7rem;
    justify-content: flex-start;
  }
`;

interface FooterProps {
  navRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const Footer = ({ navRefs }: FooterProps) => {
  return (
    <FooterWrapper>
      <Container>
        <FirstSection>
          <LogoContainer>
            <LogoImage src={logoSvg} alt='Scrum Sages Logo' />
          </LogoContainer>
          <LinkContainer>
            {headerLinks.map((link, index) => (
              <NavLink
                key={index}
                $link={link}
                color={headerTextColor}
                navRef={navRefs[link.toLowerCase()]}
              />
            ))}
          </LinkContainer>
          <LinkContainer>
            {footerLinks.map((link, index) => (
              <NavLink key={index} $link={link} color={headerTextColor} />
            ))}
          </LinkContainer>
        </FirstSection>
        <SecondSection>
          <SocialMediaLinkContainer>
            <IconBrandFacebook size={60} stroke={1} />
            <IconBrandLinkedin size={60} stroke={1} />
            <IconBrandInstagram size={60} stroke={1} />
            <IconBrandTiktok size={60} stroke={1} />
          </SocialMediaLinkContainer>
        </SecondSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
