import React from 'react';
import { Provider } from 'mobx-react';

import RepoStore from '../../models/RepoStore';
import Repo from './Repo';

const repoStore = new RepoStore();

const RepoProvider: React.FC = () => (
  <Provider repoStore={repoStore}>
    <Repo/>
  </Provider>
);

export default RepoProvider;
