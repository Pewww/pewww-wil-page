import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import Sidebar from '../Sidebar';
import Content from '../Content';

const Wrapper = styled.div`
  height: 100%;
`;

const Repo: React.FC = observer(() => (
  <Wrapper>
    <Sidebar/>
    <Content/>
  </Wrapper>
));

export default Repo;
