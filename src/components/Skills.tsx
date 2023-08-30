import styled from 'styled-components';
import { IconBrandGithubFilled, IconBrandSocketIo, IconChevronUp, IconChevronDown, IconBrandTypescript, IconBrandFigma, IconBrandAdobe, IconBrandCypress, IconBrandMantine, IconBrandMongodb } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export interface Data {
    title: string;
    icon: string;
    details: string;
}

const Background = styled.div`
background: #ECA579;
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
  margin-top: -0.1rem;
`;

const Buttons = styled.div`
display: flex;
justify-content: center;
font-weight: 600;
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
`;

const Card = styled.div`
height: 10rem;
width: 10rem;
margin: 4.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const data: Data[] = [
    {
        title: "GitHub",
        icon: "IconBrandGithubFilled",
        details: "We have used GitHub to work on group projects.",
    },
    {
        title: "Figma",
        icon: "IconBrandFigma",
        details: "We have used Figma to design wireframes and make prototypes as well as visually communicate ideas.",
    },
    {
        title: "Cypress",
        icon: "IconBrandCypress",
        details: "Cypress has been used for testing our front end web applications.",
    },
    {
        title: "TypeScript",
        icon: "IconBrandTypescript",
        details: "TypeScript has been used in several bigger projects, such as e-commerce sites.",
    },
    {
        title: "Socket.io",
        icon: "IconBrandSocketIo",
        details: "Used to build a chat application for the web.",
    },
    {
        title: "Mantine UI",
        icon: "IconBrandMantine",
        details: "Design system used in e-commerce and chat app projects.",
    },
    {
        title: "MongoDB",
        icon: "IconBrandMongodb",
        details: "Database hosting for e-commerce site, chat app and twitter copy. Hosts user info like username, encrypted password, posts or products as well as additional metadata associated with these.",
    },
    {
        title: "Adobe Suite",
        icon: "IconBrandAdobe",
        details: "Illustrator, Photoshop and InDesign were used to create graphic profiles and wireframes as well as mock ups of logos on products.",
    },
    {
        title: "TEST",
        icon: "IconBrandCypress",
        details: "testtesttest test teeeeeeest.",
    },
]

const icons: { [key: string]: JSX.Element} = {
    IconBrandGithubFilled: <IconWrapper><IconBrandGithubFilled size={80} /></IconWrapper>,
    IconBrandFigma: <IconWrapper><IconBrandFigma size={80} /></IconWrapper>,
    IconBrandCypress: <IconWrapper><IconBrandCypress size={80} /></IconWrapper>,
    IconBrandTypescript: <IconWrapper><IconBrandTypescript size={80} /></IconWrapper>,
    IconBrandSocketIo: <IconWrapper><IconBrandSocketIo size={80} /></IconWrapper>,
    IconBrandMantine: <IconWrapper><IconBrandMantine size={80} /></IconWrapper>,
    IconBrandMongodb: <IconWrapper><IconBrandMongodb size={80} /></IconWrapper>,
    IconBrandAdobe: <IconWrapper><IconBrandAdobe size={80} /></IconWrapper>,
};





export default function Skills() {
    const [displayData, setDisplayData] = useState<Data[]>([]);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Define how many cards per row and how many rows you want to initially display
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



    return(
        <Background>
            <Flex>
            {displayData.map((item, index) => (
                <Card key={index}>
                    {icons[item.icon]}
                    <Title>{item.title}</Title>
                </Card>
            ))}
            </Flex>
            <Buttons>
            {isExpanded ? 
            <TransparentButton onClick={handleDisplayLess}>Close <IconChevronUp /></TransparentButton> : 
            <TransparentButton onClick={handleExpand}>See the complete list <IconChevronDown /></TransparentButton>
            }
            </Buttons>
        </Background>
    );
}