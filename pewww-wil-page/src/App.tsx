import React from 'react';
import styled from 'styled-components';
import { Repo } from './components/Repo';

const StyledApp = styled.div`
  height: 100%;
`;

const App = () => (
  <StyledApp>
    <Repo/>
  </StyledApp>
);

export default App;
