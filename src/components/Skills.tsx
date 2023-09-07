import {
  IconBrandAdobe,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandSocketIo,
  IconBrandTypescript,
  IconBrandVscode,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionHeadline } from './SectionHeadline';
import SkillDetails from './SkillsDetails';
import { SkillsData, data } from './data';

const Background = styled.div`
  background: #eca579;
  padding: 1rem 0rem;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 1rem 0rem;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
`;

const Title = styled.h4`
  text-align: center;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  padding-bottom: 1rem;
`;

const TransparentButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-top: 2rem;
  color: black;
`;

const Card = styled.div`
  height: 10rem;
  width: 10rem;
  margin: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const icons: { [key: string]: JSX.Element } = {
  IconBrandGithub: (
    <IconWrapper>
      <IconBrandGithub size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandFigma: (
    <IconWrapper>
      <IconBrandFigma size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandCypress: (
    <IconWrapper>
      <IconBrandCypress size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandTypescript: (
    <IconWrapper>
      <IconBrandTypescript size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandSocketIo: (
    <IconWrapper>
      <IconBrandSocketIo size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandMantine: (
    <IconWrapper>
      <IconBrandMantine size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandMongodb: (
    <IconWrapper>
      <IconBrandMongodb size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandAdobe: (
    <IconWrapper>
      <IconBrandAdobe size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandJavascript: (
    <IconWrapper>
      <IconBrandJavascript size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandHtml5: (
    <IconWrapper>
      <IconBrandHtml5 size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandCss3: (
    <IconWrapper>
      <IconBrandCss3 size={80} stroke={1} />
    </IconWrapper>
  ),
  IconBrandVscode: (
    <IconWrapper>
      <IconBrandVscode size={80} stroke={1} />
    </IconWrapper>
  ),
};

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

export default function Skills({ navRef }: Props) {
  const [displayData, setDisplayData] = useState<SkillsData[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillsData | null>(null);

  const cardsPerRow = 4;
  const initialRows = 2;

  const handleDisplayLess = () => {
    setIsExpanded(false);
    setDisplayData(data.slice(0, cardsPerRow * initialRows));
  };

  const handleExpand = () => {
    setIsExpanded(true);
    setDisplayData(data);
  };

  useEffect(() => {
    setDisplayData(data.slice(0, cardsPerRow * initialRows));
  }, []);

  return (
    <Background ref={navRef}>
      <ContentWrapper className='skill-parent'>
        <SectionHeadline $color='black' title='SKILLS'></SectionHeadline>
        {!selectedSkill ? (
          <>
            <Flex>
              {displayData.map((item, index) => (
                <Card
                  className='skill-child'
                  key={index}
                  onClick={() => {
                    setSelectedSkill(item);
                    navRef.current!.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {icons[item.icon]}
                  <Title>{item.title}</Title>
                </Card>
              ))}
            </Flex>
            <Buttons>
              {isExpanded ? (
                <TransparentButton onClick={handleDisplayLess}>
                  Close <IconChevronUp />
                </TransparentButton>
              ) : (
                <TransparentButton onClick={handleExpand}>
                  See the complete list <IconChevronDown />
                </TransparentButton>
              )}
            </Buttons>
          </>
        ) : (
          <SkillDetails data={selectedSkill} onBack={() => setSelectedSkill(null)} />
        )}
      </ContentWrapper>
    </Background>
  );
}
