import styled from '@emotion/styled';

type PreloaderProps = {
  isDarkMode?: boolean;
};

const PreloaderContainer = styled.div<PreloaderProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .textmode {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => (props.isDarkMode ? 'white' : '#1B1212')};
  }
`;
const PreloaderImg = styled.img`
  width: 20%;
  aspect-ratio: 4/3;
  object-fit: contain;
`;

export { PreloaderContainer, PreloaderImg };
