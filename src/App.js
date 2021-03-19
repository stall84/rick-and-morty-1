import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import CharacterSelection from './components/CharacterSelection';

/**
 * @description Styled Component Imports
 */
import { Container } from './components/styled-components/Container';




function App() {
  return (
    <div className="App">
      <Container>
        <CharacterSelection />
      </Container>
    </div>
  );
}

export default App;
