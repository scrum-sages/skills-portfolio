import styled from 'styled-components';
import { IconBrandGithubFilled, IconBrandSocketIo, IconBrandTypescript, IconBrandFigma, IconBrandAdobe, IconBrandCypress, IconBrandMantine, IconBrandMongodb } from '@tabler/icons-react';

export interface Data {
    title: string;
    icon: string;
    details: string;
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  text-align: center;
`;

const IconWrapper = styled.div`
  display: inline-block;
  color: #A4D1AB;
`;

const DIVVY = styled.div`
height: 15rem;
width: 15rem;
margin: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
border-radius: 1rem;
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
    IconBrandGithubFilled: <IconWrapper><IconBrandGithubFilled size={60} /></IconWrapper>,
    IconBrandFigma: <IconWrapper><IconBrandFigma size={60} /></IconWrapper>,
    IconBrandCypress: <IconWrapper><IconBrandCypress size={60} /></IconWrapper>,
    IconBrandTypescript: <IconWrapper><IconBrandTypescript size={60} /></IconWrapper>,
    IconBrandSocketIo: <IconWrapper><IconBrandSocketIo size={60} /></IconWrapper>,
    IconBrandMantine: <IconWrapper><IconBrandMantine size={60} /></IconWrapper>,
    IconBrandMongodb: <IconWrapper><IconBrandMongodb size={60} /></IconWrapper>,
    IconBrandAdobe: <IconWrapper><IconBrandAdobe size={60} /></IconWrapper>,
};





export default function Skills() {
    return(
        <div>
            <Flex>
            {data.map((item, index) => (
                <DIVVY key={index}>
                    {icons[item.icon]}
                    <Title>{item.title}</Title>
                </DIVVY>
            ))}
            </Flex>
        </div>
    );
}
