import styled from 'styled-components';
import logoSvg from '../assets/HeaderLogo.svg'; // Update the path to your SVG file

interface LogoProps {
  onClick?: () => void;
}

export function HeaderLogo(props: LogoProps) {
  return (
    <LogoWrapper>
      <LogoImage src={logoSvg} alt='Scrum Sages Logo' onClick={props.onClick} />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  height: 100%;
  margin-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  max-height: 88%;
  max-width: 100%;
`;
