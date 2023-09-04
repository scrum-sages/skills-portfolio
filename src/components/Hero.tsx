import styled from 'styled-components';
import useClosestMedia from '../hooks/useClosestMedia';

export default function Hero() {
  const screenSize = useClosestMedia();

  const Maps = {
    lg: [
      ['Explore expertise.', 2, 1, 2, 1],
      [2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1],
      [2, 1, 2, 1, 2],
      ['Meet your next collaborator', 3, 1, 2, 1],
    ],
    md: [
      ['Explore expertise.', 2, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
      [2, 1, 2, 1],
      ['Meet your next collaborator.', 3, 1, 2],
    ],
    sm: [
      ['Explore expertise.', 2, 1],
      [2, 1, 2],
      [1, 2, 1],
      [2, 1, 2],
      ['Meet your next collaborator.', 3, 1],
    ],
    xs: [
      ['Explore expertise.', 2],
      [2, 1],
      [1, 2],
      ['Meet your next collaborator', 1],
      [3, 2],
    ],
  };

  const PatternMap = Maps[screenSize as keyof typeof Maps];

  const setContent = (col: string | number) => {
    switch (col) {
      case 1:
        return <Star />;

      case 2:
        return <Circle />;

      case 3:
        return <ContactButton>Contact us</ContactButton>;

      default:
        return col;
    }
  };

  return (
    <HeroSection>
      <HeroContainer>
        {PatternMap.map((col, i) => {
          return (
            <RowDiv key={i} isLastRow={i === PatternMap.length - 1}>
              {col.map((row, j) => {
                return (
                  <CellDiv key={j} isLastCol={j === col.length - 1}>
                    {setContent(row)}
                  </CellDiv>
                );
              })}
            </RowDiv>
          );
        })}
      </HeroContainer>
    </HeroSection>
  );
}

const HeroContainer = styled.div`
  height: calc(100vh - 4rem);
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: column;

  margin: 4rem 1rem 1rem;
  padding-bottom: 1rem;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
`;

interface RowProps {
  isLastRow: boolean;
}

const RowDiv = styled.div<RowProps>`
  display: flex;
  gap: 2rem;
  flex: ${props => (props.isLastRow ? 0 : 1)};
`;

interface CellProps {
  isLastCol: boolean;
}

const CellDiv = styled.div<CellProps>`
  flex: ${props => (props.isLastCol ? 0 : 1)};

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: Medium;
  font-size: 1.5rem;
`;

const ContactButton = styled.button`
  border: none;
  background-color: #eca579;

  width: 100%;
  padding: 0.5rem;
  border-radius: 9999px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: Medium;
  font-size: 1.2rem;
`;

const HeroSVG = styled.svg`
  path {
    stroke: black;
    stroke-width: 5;
  }
`;

function Star() {
  return (
    <HeroSVG
      width='51'
      height='51'
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M30 51C30 39.402 39.402 30 51 30' />
      <path d='M21 1.2517e-06C21 11.598 11.598 21 -1.46031e-06 21' />
      <path d='M-1.04308e-07 30C11.598 30 21 39.402 21 51' />
      <path d='M51 21C39.402 21 30 11.598 30 -1.04308e-07' />
    </HeroSVG>
  );
}

function Circle() {
  return (
    <HeroSVG
      width='57'
      height='57'
      viewBox='0 0 57 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M54 32.9998C54 44.5978 44.598 53.9998 33 53.9998' />
      <path d='M3 24.0002C3 12.4023 12.402 3.00024 24 3.00024' />
      <path d='M24 53.9998C12.402 53.9998 3 44.5977 3 32.9998' />
      <path d='M33 3C44.598 3 54 12.402 54 24' />
    </HeroSVG>
  );
}
