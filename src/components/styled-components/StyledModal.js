import React from 'react';
import styled from 'styled-components';

export const StyledModal = styled.div`
        top: 50% ;
        left: 50% ;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 400px;
        background-color: var(--LightenUpPeach) ;
        border: 2px solid var(--Tiber);
        border-radius: 5%;
        outline: 0;
        box-shadow: var(--level-3), var(--level-4);
        padding: 34px;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        @media(max-width: 415px) {
            justify-content: space-evenly;
            height: 400px;
            width: 320px;
            font-size: 1em;
            padding: 20px;
        }
`;
