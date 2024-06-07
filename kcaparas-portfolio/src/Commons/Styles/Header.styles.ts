import styled from '@emotion/styled';

const StyledHeader = styled.header`
    background-color: #4A738C;
    max-height: 5rem;
    max-width: 100vw;
    padding: 10px;
    margin:0;
    box-sizing: border-box;

    a{
        font-size:28px;
        font-family: "Anton", sans-serif;
        color:white;
        font-weight:700;
        line-height:36px;
        text-decoration:none;
    }
`;

const StyledList = styled.ul`
    position:absolute;
    right:0;
    list-style:none;
    display:flex;
    flex-direction: row;
`;

export { StyledHeader, StyledList };
