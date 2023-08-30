import styled from 'styled-components';
import logoSvg from '../assets/HeaderLogo.svg'; // Update the path to your SVG file

export function HeaderLogo() {
  return (
    <LogoWrapper>
      <LogoImage src={logoSvg} alt='Scrum Sages Logo' />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  height: 100%;
  margin-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  max-height: 88%;
  max-width: 100%;
`;
