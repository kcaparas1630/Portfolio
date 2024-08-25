import styled from '@emotion/styled';

type ViewProps = {
    isDarkMode: boolean;
};
const StyledView = styled.div<ViewProps>`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.isDarkMode ? '#131842' : '#fbf6e2')};
    width: 100vw;
    height: 100%;
    transition: background-color 0.5s ease;

    @media(min-width: 768px) {
        min-height: 100vh;
    }
`;

export default StyledView;
