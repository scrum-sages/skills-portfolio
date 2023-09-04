import { styled } from 'styled-components';
import { ProjectList } from './ProjectData'; // Import your data file

function Projects() {
  return (
    <Container>
      <h2 style={{ paddingLeft: '2rem' }}>PROJECTS</h2>
      <ProjectSection>
        {ProjectList.map((project, index) => (
          <ProjectItem key={index}>
            <Image src={project.imageURL} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <Button>VISIT SITE</Button>
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
  padding: 2rem 2rem 6rem 2rem;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProjectItem = styled.div`
  width: 100%;
  padding: 2rem;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const Image = styled.img`
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  width: 100%;
  background: none;
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
