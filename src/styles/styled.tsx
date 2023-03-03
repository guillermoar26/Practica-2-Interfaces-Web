import styled from "styled-components";

export const StyledTable = styled.div`
    width: 85%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid black;
    text-align: center;
    margin-top: 2rem;
    background-color: #7c7b7b;
    overflow: auto;
    font-family: open-sans, sans-serif;
`;

export const StyledElement = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: open-sans, sans-serif;
`;