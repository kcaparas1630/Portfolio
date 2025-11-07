import { FC } from 'react';
import { ProjectView, ProjectHeader } from './Styled-components/Projects';

const Projects: FC = () => {
  console.log('Projects component rendered');
  return (
    <ProjectView id="projects-section">
      <ProjectHeader>
        Projects
      </ProjectHeader>
      {/* Future project cards will be added here */}
    </ProjectView>
  );
};

export default Projects;
