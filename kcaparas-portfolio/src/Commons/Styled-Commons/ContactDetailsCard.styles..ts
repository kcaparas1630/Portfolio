import styled from '@emotion/styled';
import screenSize from '../../Interface/screenSize';

const StyledContentContainer = styled.div`
    width: 80vw;
    height: 70vh;
    background-color: #F2EFEB;
    padding: 20px;
    margin: 15% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 4px 21px 0px #0D0D0D;
    border: 0;
`;

const StyledPictureHolder  = styled.div`
    width: 170px;
    height: 170px;
    position: relative;
    top: -80px;
    img{
        border-radius: 15%;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

const StyledName = styled.h1`
    font-size: 25px;
    font-weight: 700;
    position: relative;
    top: -70px;
`;

const StyledPositionHolderContainer = styled.div`
    position: relative;
    top: -60px;
    height: 60px;
    width: 150px;
    padding: 0 10px;
    background-color: #A68C7C;
    border-radius: 10%;
    text-align: center;
    box-shadow: -1px 0 10px 0px #0D0D0D;
`;

const StyledSocialsGroupContainer = styled.div`
    position: relative;
    top: -40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    width: 100%;
`;

const StyledSocialsLink = styled.div`

`;

export { 
    StyledContentContainer,
    StyledPictureHolder,
    StyledName,
    StyledPositionHolderContainer, 
    StyledSocialsGroupContainer,
};
