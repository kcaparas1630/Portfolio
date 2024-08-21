import styled from '@emotion/styled';

type SkillType = {
  isDarkMode: boolean;
  inView: boolean;
};

const SkillsContainer = styled.section<SkillType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 40vh;
  background-color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SkillsLeftContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50vw;
    padding: 0 0 0 80px;
    text-align: start;
  }
`;

const SkillsHeader = styled.h2<SkillType>`
  font-size: 28px;
  font-weight: 700;
  width: 90%;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;

const SkillsRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const SkillsSetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillSetItem = styled.div<SkillType>`
  display: flex;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  padding: 15px 20px;
  border-radius: 10px;

  img {
    width: 30%;
  }

  p {
    margin-left: 25px;
    font-size: 20px;
    font-weight: 600;
  }
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;

export {
  SkillsContainer,
  SkillsLeftContainer,
  SkillsHeader,
  SkillsRightContainer,
  SkillsSetContainer,
  SkillSetItem,
};
