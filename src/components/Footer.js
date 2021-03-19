import React from 'react'

import {StyledFooter} from './styled-components/StyledFooter';


export default function Footer() {
    return (
        <StyledFooter>Thanks to the <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">Rick and Morty API</a>
            <br/>
            <span style={{fontSize: '10px'}}>2021 Michael Stallings</span>
        </StyledFooter>
    )
}


