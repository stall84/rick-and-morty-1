import styled from 'styled-components';

export const Container = styled.div`

    box-sizing: 'border-box';
    height: 100vh;
    width: 100vw;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--Lobiolly);
    @media(max-width: 400px) {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }

`;