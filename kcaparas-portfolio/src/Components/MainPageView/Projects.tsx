import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ProjectSection,
  ProjectsCard,
  ProjectContainer,
  DescriptionContainer,
  ProjectHeader2Container,
  ProjectHeader2,
} from './Styled-components/Projects';
import ProjectArray from '../../Constants/ProjectsArray';
import ComponentProps from '../../Types/ComponentProps';
import Button from '../../Commons/Button';

const Projects: FC<ComponentProps> = ({ isDarkMode }) => {
  const getProjectArray = ProjectArray();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <ProjectSection
      isDarkMode={isDarkMode}
      ref={ref}
    >
      <ProjectHeader2Container>
        <ProjectHeader2
          isDarkMode={isDarkMode}
          inView={inView}
        >
          Here&apos;s my current projects!
        </ProjectHeader2>
      </ProjectHeader2Container>
      <ProjectContainer>
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
              {project.projectLink && (
                <Button
                  text="Visit Website"
                  type="button"
                  isDarkMode={isDarkMode}
                  handleClick={() => window.open(project.projectLink, '_blank')}
                />
              )}
              {project.projectGithubLink && (
                <Button
                  text="Visit Github Repository"
                  type="button"
                  isDarkMode={isDarkMode}
                  handleClick={() => window.open(project.projectGithubLink, '_blank')}
                />
              )}
            </DescriptionContainer>
          </ProjectsCard>
        ))}
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
