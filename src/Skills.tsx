import styled from 'styled-components';
import { IconBrandGithubFilled, IconBrandSocketIo, IconBrandTypescript, IconBrandFigma, IconBrandAdobe, IconBrandCypress, IconBrandMantine, IconBrandMongodb } from '@tabler/icons-react';

export interface Data {
    title: string;
    icon: string;
    details: string;
}


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
    IconBrandGithubFilled: <IconBrandGithubFilled />,
    IconBrandFigma: <IconBrandFigma />,
    IconBrandCypress: <IconBrandCypress />,
    IconBrandTypescript: <IconBrandTypescript />,
    IconBrandSocketIo: <IconBrandSocketIo />,
    IconBrandMantine: <IconBrandMantine />,
    IconBrandMongodb: <IconBrandMongodb />,
    IconBrandAdobe: <IconBrandAdobe />,
};



const Title = styled.h3`
  text-align: center;
`;

const DIVVY = styled.div`
height: 20rem;
width: 20rem;
background: magenta;
margin: 1rem;
`;

export default function Skills() {
    return(
        <div>
            {data.map((item, index) => (
                <DIVVY key={index}>
                    {icons[item.icon]}
                    <Title>{item.title}</Title>
                </DIVVY>
            ))}
        </div>
    );
}
