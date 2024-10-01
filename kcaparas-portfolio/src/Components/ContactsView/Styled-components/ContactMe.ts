import styled from '@emotion/styled';

type ContactProps = {
  isDarkMode?: boolean;
  inView?: boolean;
};

const Header1Container = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Header1 = styled.h1<ContactProps>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  gap: 24px;
  width: 90%;
`;

const StyledForm = styled.div<ContactProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  padding: 0.8rem;
  gap: 20px;
  background-color: ${(props) => (props.isDarkMode ? '#fbf6e2' : '#131842 ')};
  border-radius: 8px;
  box-shadow: -15px 15px 10px -15px #111;
  margin: 0 auto;
  transform: translateY(${(props) => (props.inView ? '0' : '100%')});
  opacity: ${(props) => (props.inView ? '0.8' : '0')};
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
`;
const StyledField = styled.div<ContactProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;

  label {
    font-weight: 700;
    color: ${(props) => (props.isDarkMode ? '#1B1212' : 'white')};
  }
  input {
    border: solid 1px gray;
    border-radius: 3px;
  }
`;

const StyledTextArea = styled.div<ContactProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 700;
    color: ${(props) => (props.isDarkMode ? '#1B1212' : 'white')};
  }

  textarea {
    border: solid 1px gray;
    border-radius: 3px;
    resize: none;
    height: 76px;
  }
`;

export { Header1Container, Header1, Container, StyledForm, StyledField, StyledTextArea };
