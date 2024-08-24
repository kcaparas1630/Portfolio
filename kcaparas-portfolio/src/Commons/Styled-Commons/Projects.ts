import styled from '@emotion/styled';

const ProjectsContainer = styled.section`
  label: ProjectsContainer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const ProjectsCard = styled.div`
  label: ProjectsCard;
  border-radius: 5px;
  width: 40%;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const DescriptionContainer = styled.div`
  padding: 2px 16px;
`;

export { ProjectsContainer, ProjectsCard, DescriptionContainer };
