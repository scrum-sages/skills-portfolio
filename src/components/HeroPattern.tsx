import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useClosestMedia from '../hooks/useClosestMedia';

export default function HeroPattern() {
  const screenSize = useClosestMedia();

  const Maps = {
    lg: [
      [1, 2, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
      [2, 1, 2, 1],
    ],
    md: [
      [1, 2, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
      [2, 1, 2, 1],
    ],
    sm: [
      [1, 2, 1, 2],
      [2, 1, 2, 1],
      [1, 2, 1, 2],
    ],
  };

  const PatternMap = Maps[screenSize as keyof typeof Maps];
  return (
    <PatternContainer>
      {PatternMap.map((row, i) => {
        return (
          <RowDiv key={i}>
            {row.map((col, j) => {
              return col === 1 ? <Icon key={j} invert={false} /> : <Icon key={j} invert={true} />;
            })}
          </RowDiv>
        );
      })}
    </PatternContainer>
  );
}

const PatternContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface StarProps {
  invert: boolean;
}

function Icon({ invert }: StarProps) {
  const [inverted, setInverted] = useState(invert);

  useEffect(() => {
    setTimeout(() => {
      setInverted(!inverted);
    }, Math.floor(Math.random() * 1000 * 20));
  });

  return (
    <HeroSVG
      width='70'
      height='70'
      viewBox='0 0 57 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M54 32.9998C54 44.5978 44.598 53.9998 33 53.9998'
        style={{
          transform: `rotate(${inverted ? '180deg' : '0deg'})`,
          transformOrigin: '44px 44px',
        }}
      />
      <path
        d='M3 24.0002C3 12.4023 12.402 3.00024 24 3.00024'
        style={{
          transform: `rotate(${inverted ? '180deg' : '0deg'})`,
          transformOrigin: '13.5px 13.5px',
        }}
      />
      <path
        d='M24 53.9998C12.402 53.9998 3 44.5977 3 32.9998'
        style={{
          transform: `rotate(${inverted ? '180deg' : '0deg'})`,
          transformOrigin: '13.5px 44px',
        }}
      />
      <path
        d='M33 3C44.598 3 54 12.402 54 24'
        style={{
          transform: `rotate(${inverted ? '180deg' : '0deg'})`,
          transformOrigin: '44.5px 13.5px',
        }}
      />
    </HeroSVG>
  );
}

const HeroSVG = styled.svg`
  path {
    stroke: black;
    stroke-width: 5;

    transition: all 0.2s ease-in;
  }
`;
