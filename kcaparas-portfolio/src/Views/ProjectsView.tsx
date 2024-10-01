import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledView } from './ViewStyles';
import {
  ProjectContainer,
  ProjectsCard,
  DescriptionContainer,
} from './ProjectView';
import ProjectArray from '../Constants/ProjectsArray';
import Header from '../Commons/Header';

const ProjectsView = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true',
  );
  
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollHeader = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);
    // trigger if scrolling goes beyond 10px
    if (scrollDelta > 10) {
      // going up
      if (scrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
        // going down
      } else {
        setIsHeaderVisible(true);
      }
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [scrollHeader]);

  const getProjectArray = ProjectArray();

  return (
    <StyledView ref={ref} isDarkMode={isDarkMode}>
      <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        isHeaderVisible={isHeaderVisible}
      />
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
              {/* <Button
                text="Learn more"
                type="button"
                isDarkMode={isDarkMode}
              /> */}
            </DescriptionContainer>
          </ProjectsCard>
        ))}
      </ProjectContainer>
    </StyledView>
  );
};

export default ProjectsView;
