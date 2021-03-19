import styled from 'styled-components';

export const StyledList = styled.ul`
    width: 360px;
    background-color: var(--lobioCompliment);
    position: relative;
    overflow: auto;
    max-height: 380px;
    padding: 5px;
    @media(max-width: 415px) {
        height: 300px;
        width: 300px;
    }
`;
