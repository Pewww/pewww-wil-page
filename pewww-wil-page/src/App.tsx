import React from 'react';
import styled from 'styled-components';
import { Repo } from './components/Repo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
