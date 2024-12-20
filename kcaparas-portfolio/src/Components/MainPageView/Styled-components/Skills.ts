import styled from '@emotion/styled';

type SkillType = {
  isDarkMode: boolean;
  inView?: boolean;
};

const SkillsContainer = styled.section<SkillType>`
  label: SkillsContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 45vh;
  background-color: ${(props) => (props.isDarkMode ? '#131842' : '#1C225F')};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    min-height: 80vh;
  }
  @media (min-width: 1024px) {
    min-height: 80vh;
  }
`;

const SkillsLeftContainer = styled.div`
  label: SkillsLeftContainer;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
    padding: 0 0 0 20px;
    text-align: start;
  }
`;

const SkillsHeader2 = styled.h2<SkillType>`
  label: SkillsHeader2;
  font-size: 2rem;
  font-weight: 700;
  width: 90%;
  margin: 24px 0;
  color: white;
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
`;
const SkillsHeader3 = styled.h3<SkillType>`
  label: SkillsHeader3;
  font-size: 1.15rem;
  font-weight: 700;
  width: 90%;
  margin: 12px 0 24px 0;
  color: white;
  transform: translateX(${(props) => (props.inView ? '0' : '-100%')});
  opacity: ${(props) => (props.inView ? '0.70' : '0')};
  transition:
    transform 1s ease,
    opacity 0.5s ease;
`;

const SkillsRightContainer = styled.div`
  label: SkillsRightContainer;
  width: 100%;
  display: flex;
  padding-bottom: 24px;
  justify-content: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const SkillsSetContainer = styled.div`
  label: SkillsSetContainer;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillSetItem = styled.div<SkillType>`
  label: SkillSetItem;
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  background-color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842')};
  color: ${(props) => (props.isDarkMode ? '#1B1212' : 'white')};
  padding: 15px 20px;
  border-radius: 10px;
  flex-direction: row;
  gap: 24px;
  box-shadow: -15px 15px 10px -15px #111;
  img {
    flex-shrink: 0;
    width: 30%;
    max-width: 100px;
    height: auto;
  }

  p {
    font-size: 1.15rem;
    font-weight: 600;
    flex: 1;
    word-break: break-word;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.isDarkMode ? '15px 15px 10px -15px #111' : '-15px 15px 10px -15px #E68369'};
    scale: 1.05;
  }
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '1' : '0')};
  transition:
    transform 1s ease,
    box-shadow 0.3s ease-in-out,
    scale 0.5s ease,
    opacity 1s ease;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export {
  SkillsContainer,
  SkillsLeftContainer,
  SkillsHeader2,
  SkillsHeader3,
  SkillsRightContainer,
  SkillsSetContainer,
  SkillSetItem,
};
