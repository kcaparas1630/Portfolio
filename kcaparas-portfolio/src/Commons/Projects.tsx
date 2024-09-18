import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ProjectsContainer,
  ProjectsCard,
  DescriptionContainer,
  ProjectHeader2Container,
  ProjectHeader2,
} from './Styled-Commons/Projects';
import ProjectArray from '../Constants/ProjectsArray';
import Button from './Button';
import ComponentProps from '../Types/ComponentProps';

const Projects: FC<ComponentProps> = ({ isDarkMode }) => {
  const getProjectArray = ProjectArray();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <ProjectsContainer ref={ref}>
      <ProjectHeader2Container>
        <ProjectHeader2
          isDarkMode={isDarkMode}
          inView={inView}
        >
          Here&apos;s my current projects!
        </ProjectHeader2>
      </ProjectHeader2Container>
      {getProjectArray.map((project) => (
        <ProjectsCard
          key={project.id}
          isDarkMode={isDarkMode}
          inView={inView}
        >
          <img
            src={project.projectImage}
            alt={project.projectImageAlt}
          />
          <DescriptionContainer>
            <h4>{project.projectName}</h4>
            <p>{project.projectDescription}</p>
            <Button
              text="Learn more"
              type="button"
              isDarkMode={isDarkMode}
            />
          </DescriptionContainer>
        </ProjectsCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
