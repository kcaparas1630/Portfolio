import styled from '@emotion/styled';

type ViewProps = {
    isDarkMode: boolean;
};
const StyledView = styled.div<ViewProps>`
    background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
    width: 100vw;
    height: 100vh;
    transition: background-color 0.5s ease;
`;

export default StyledView;
