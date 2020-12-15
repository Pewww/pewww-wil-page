import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Repo } from './components/Repo';

const StyledApp = styled.div`
  height: 100%;
`;

const App = () => (
  <StyledApp>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Repo}
        />
      </Switch>
    </Router>
  </StyledApp>
);

export default App;
