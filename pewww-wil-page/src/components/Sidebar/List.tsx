import React from 'react';
import styled from 'styled-components';

import { Content } from '../../@types/repo';
import SidebarItem from './Item';

const ListWrapper = styled.ul`
  height: calc(100% - 100px);
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

interface SidebarListProps {
  contents: Content[];
}

const SidebarList: React.FC<SidebarListProps> = ({ contents }) => (
  <ListWrapper>
    {contents.map(props => (
      <SidebarItem
        key={props.sha}
        {...props}
      />
    ))}
  </ListWrapper>
);

export default SidebarList;
