import styled from '@emotion/styled';

type ProjectsProps = {
  isDarkMode: boolean;
  inView?: boolean;
};

const ProjectSection = styled.section<ProjectsProps>`
  label: ProjectSection;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 24px;
  background-color: ${(props) => (props.isDarkMode ? 'var(--native-dark-bg-color)' : '#fbf6e2')};
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? '#fbf6e2' : 'var(--native-dark-bg-color)')};
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ProjectHeader2Container = styled.div`
  display: inline-block;
  width: 90%;
`;

const ProjectHeader2 = styled.h2<ProjectsProps>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;

const ProjectsCard = styled.div<ProjectsProps>`
  label: ProjectsCard;
  border-radius: 5px;
  width: 90%;
  padding-bottom: 24px;
  background-color: ${(props) => (props.isDarkMode ? '#1C225F' : '#131842')};
  color: white;
  box-shadow: 0 4px 8px 0 #e68369;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    opacity: 0.8;
  }
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 1s ease,
    box-shadow 0.3s ease-in-out,
    opacity 1s ease;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const DescriptionContainer = styled.div`
  padding: 0 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  ProjectSection,
  ProjectContainer,
  ProjectsCard,
  DescriptionContainer,
  ProjectHeader2Container,
  ProjectHeader2,
};
