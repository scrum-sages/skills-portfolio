import { styled } from 'styled-components';
import { ProjectList } from './ProjectData'; // Import your data file

interface Props {
  navRef: React.RefObject<HTMLDivElement>;
}

function Projects({ navRef }: Props) {
  return (
    <Container ref={navRef}>
      <Heading>PROJECTS</Heading>
      <ProjectSection>
        {ProjectList.map((project, index) => (
          <ProjectItem key={index}>
            <Image src={project.imageURL} alt={project.title} />
            <ProjectItemInner>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <Button as='a' href={project.website}>
                VISIT SITE
              </Button>
            </ProjectItemInner>
          </ProjectItem>
        ))}
      </ProjectSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  background: #f0eee8;
  text-align: left;
  padding: 2rem 0 6rem 0;

  @media (min-width: 1024px) {
    padding: 2rem 2rem 6rem 2rem;
  }
`;

const Heading = styled.h2`
  padding-left: 2rem;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const ProjectItemInner = styled.div`
  flex: 1; /* This makes it take up all available vertical space */
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
  &:hover {
    border-color: #eca579;
    background: #eca579;
  }
`;

export default Projects;
