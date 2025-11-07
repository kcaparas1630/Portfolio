import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HelloView = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20vh;
`;

const HelloContainer = styled(motion.div)`
    position: relative;
    min-height: 100vh;
    width: 100vw;
`;

const HelloHeader = styled(motion.h2)`
    font-size: 2rem;
    font-weight: 900;
    margin: 0 auto;
    line-height: 1.2;
    text-align: center;
    width: 100vw;
    word-wrap: break-word;
    white-space: normal;

    @media (min-width: 1024px) {
        top: 40vh;
        font-size: 5rem;
        width: 60vw;
        line-height: 1.15;
    }
`;

export { HelloView, HelloContainer, HelloHeader };
