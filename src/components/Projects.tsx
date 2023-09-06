import { styled } from 'styled-components';
import { ProjectList } from './ProjectData'; // Import your data file
import { SectionHeadline } from './SectionHeadline';

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

function Projects({ navRef }: Props) {
  return (
    <Container ref={navRef}>
      <ContactWrapper>
        <SectionHeadline $color='black' title='PROJECTS'></SectionHeadline>
        <ProjectSection>
          {ProjectList.map((project, index) => (
            <ProjectItem key={index}>
              <Image src={project.imageURL} alt={project.title} />
              <ProjectItemInner>
                <CardTitle>{project.title}</CardTitle>
                <CardText>{project.details}</CardText>
                <Button as='a' href={project.website}>
                  VISIT SITE
                </Button>
              </ProjectItemInner>
            </ProjectItem>
          ))}
        </ProjectSection>
      </ContactWrapper>
    </Container>
  );
}

const CardTitle = styled.h3`
  margin: 0.5rem 0;
`;
const CardText = styled.p`
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  background: #f0eee8;
  text-align: left;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 5rem);
    align-items: center;
    min-height: 800px;
  }
`;
const ContactWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`;

const ProjectSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  @media (min-width: 1024px) {
  }
`;

const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 24%;
  }
`;

const ProjectItemInner = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 13rem;
  }
  @media (min-width: 1024px) {
    height: 16rem;
  }
  @media (min-width: 1224px) {
    height: 14rem;
    background-color: pink;
  }
`;

const Image = styled.img`
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  background: none;
  text-decoration: none;
  color: black;
  border: black 1px solid;
  border-radius: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  transition: 200ms ease-in;
  &:hover {
    border-color: #eca579;
    background: #eca579;
  }
`;

export default Projects;
