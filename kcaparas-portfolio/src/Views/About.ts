import styled from '@emotion/styled';

const MobileContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopContainer = styled.div`
  width: 100vw;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
export { MobileContainer, DesktopContainer };
