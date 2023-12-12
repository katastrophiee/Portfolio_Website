import styled from 'styled-components';

export const CenteredDiv = styled.div`
    margin: 5% 0 5% 5%;
    width: 90%;
    height: 80%;
    background-color: rgb(240, 202, 208);
    position: absolute;
`;

export const CenteredHeader = styled.h1`
    text-shadow: .25vw .25vw 0vw #6bdde6;
    font-size: 10vh;
    padding-top: 1vw;
    text-align: center;
    opacity: 0;
    animation: fade-in .75s ease-in-out forwards;
    padding-bottom: 0;
    margin: 1vh;
`;

export const StyledCenteredParagraph = styled.p`
    color: white;
    font-size: 5vh;
    text-align: center;
    opacity: 0;
    animation: fade-in .75s ease-in-out forwards;
    animation-delay: .75s;
    text-shadow: .1vw .1vw 0vw rgb(206, 134, 152);
    padding: 10px;
    margin: 0px 7.5vw 20px 7.5vw;
`;

export const StyledUL = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1vw;
    width: 1vw;
    margin-right: 250px;
`;