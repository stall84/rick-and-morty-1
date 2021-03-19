import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import {StyledHeader} from './components/styled-components/StyledHeader';
import CharacterSelection from './components/CharacterSelection';
import Footer from './components/Footer';

/**
 * @description Styled Component Imports
 */
import { Container } from './components/styled-components/Container';




function App() {
  return (
    <div className="App">
      <Container>
        <StyledHeader />
        <CharacterSelection />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
