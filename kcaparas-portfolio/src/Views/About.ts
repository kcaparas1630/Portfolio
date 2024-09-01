import styled from '@emotion/styled';

const MobileDesignationContainer = styled.div`
  width: 100vw;
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopDesignationContainer = styled.div`
  width: 100vw;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;
export { MobileDesignationContainer, DesktopDesignationContainer };
