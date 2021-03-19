import React from 'react';
import styled from 'styled-components';

export const ListContainer = styled.div`
    background-color: var(--Tiber);
    box-shadow: var(--level-2), var(--level-3);
    border-radius: 3%;
    max-width: 400px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
    @media(max-width: 415px) {
        width: 340px;
    }
`;

export const SpacerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
`;