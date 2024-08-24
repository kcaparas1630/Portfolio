import { ProjectsContainer, ProjectsCard, DescriptionContainer } from './Styled-Commons/Projects';
import ProjectArray from '../Constants/ProjectsArray';

const Projects = () => {
  const getProjectArray = ProjectArray();

  return (
    <ProjectsContainer>
      {getProjectArray.map((project) => (
        <ProjectsCard key={project.id}>
          <img
            src={project.projectImage}
            alt={project.projectImageAlt}
          />
          <DescriptionContainer>
            <h4>{project.projectName}</h4>
            <p>{project.projectDescription}</p>
          </DescriptionContainer>
        </ProjectsCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
