import styled from 'styled-components';

export default function Hero() {
  const PatternMap = [
    ['Explore expertise.', 2, 1, 2, 1],
    [2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1],
    [2, 1, 2, 1, 'Find your new collaborator'],
    [1, 2, 1, 2, 3],
    [2, 1, 2, 1, ''],
  ];

  const setContent = (col: string | number) => {
    switch (col) {
      case 1:
        return <Star />;

      case 2:
        return <Circle />;

      case 3:
        return <ContactButton />;

      default:
        return col;
    }
  };

  const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 1440px;

    display: flex;

    margin: 4rem 1rem 0 1rem;
  `;

  const HeroSection = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <HeroSection>
      <HeroContainer>
        {PatternMap.map((row, i) => {
          return (
            <HeroColumn key={i} i={i}>
              {row.map((col, j) => {
                return (
                  <HeroCell key={j} j={j}>
                    {setContent(col)}
                  </HeroCell>
                );
              })}
            </HeroColumn>
          );
        })}
      </HeroContainer>
    </HeroSection>
  );
}

interface ColumnProps {
  i: number;
}

function HeroColumn({ children, i }: { children: React.ReactNode; i: number }) {
  const ColumnDiv = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    flex: ${props => (props.i === 5 ? 0 : 1)};
  `;

  return <ColumnDiv i={i}>{children}</ColumnDiv>;
}

function HeroCell({ j, children }: { j: number; children: React.ReactNode }) {
  const CellDiv = styled.div`
    flex: 1;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: Medium;
    font-size: 1.5rem;
  `;

  return <CellDiv className={'col' + j}>{children}</CellDiv>;
}

function Star() {
  return (
    <svg width='51' height='51' viewBox='0 0 51 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M30 51C30 39.402 39.402 30 51 30' stroke='black' stroke-width='5.29' />
      <path
        d='M21 1.2517e-06C21 11.598 11.598 21 -1.46031e-06 21'
        stroke='black'
        stroke-width='5.29'
      />
      <path d='M-1.04308e-07 30C11.598 30 21 39.402 21 51' stroke='black' stroke-width='5.29' />
      <path d='M51 21C39.402 21 30 11.598 30 -1.04308e-07' stroke='black' stroke-width='5.29' />
    </svg>
  );
}

function Circle() {
  return (
    <svg width='57' height='57' viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M54 32.9998C54 44.5978 44.598 53.9998 33 53.9998'
        stroke='black'
        stroke-width='5.29'
      />
      <path d='M3 24.0002C3 12.4023 12.402 3.00024 24 3.00024' stroke='black' stroke-width='5.29' />
      <path d='M24 53.9998C12.402 53.9998 3 44.5977 3 32.9998' stroke='black' stroke-width='5.29' />
      <path d='M33 3C44.598 3 54 12.402 54 24' stroke='black' stroke-width='5.29' />
    </svg>
  );
}

function ContactButton() {
  return <></>;
}
