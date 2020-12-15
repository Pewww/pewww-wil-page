import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { $DARK, $WHITE, $SIDEBAR_WIDTH } from '../../styles/variables.styles';
import useMobxStore from '../../hooks/useMobxStore';
import SidebarList from './List';

const StyledSidebar = styled.aside`
  position: relative;
  box-shadow: -3px 0 5px 0 ${$DARK};
  width: ${$SIDEBAR_WIDTH}px;
  height: 100%;
  float: left;

  h1 {
    margin: 0;
    background-color: ${$DARK};
    padding-left: 20px;
    line-height: 4.75;

    a {
      text-decoration: none;
      color: ${$WHITE};
      font-family: 'Gotham Light';
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

const Sidebar: React.FC = observer(() => {
  const {
    repoStore: {
      getRepoInfo,
      getContents,
      repoName,
      repoUrl,
      contents: repoContents
    }
  } = useMobxStore();

  const contents = useMemo(() => {
    return repoContents.slice(0, repoContents.length - 1);
  }, [repoContents]);

  useEffect(() => {
    getRepoInfo('Pewww', 'WIL');
    getContents('Pewww', 'WIL');
  }, [getRepoInfo, getContents]);

  return (
    <StyledSidebar>
      <h1>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoName}
        </a>
      </h1>
      <SidebarList contents={contents}/>
    </StyledSidebar>
  );
});

export default Sidebar;
