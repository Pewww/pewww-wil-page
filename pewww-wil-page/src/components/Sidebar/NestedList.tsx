import React, { memo } from 'react';
import styled from 'styled-components';

import { ContentFile } from '../../@types/repo';
import SidebarNestedItem from './NestedItem';

const NestedList = styled.ul`
  margin-top: -10px;
  padding-left: 20px;
`

interface SidebarNestedListProps {
  folderName: string;
  folderShaKey: string;
  files: ContentFile[];
}

const SidebarNestedList: React.FC<SidebarNestedListProps> = ({
  folderName,
  folderShaKey,
  files
}) => (
  <NestedList>
    {files.map(props => (
      <SidebarNestedItem
        key={props.sha}
        folderName={folderName}
        folderShaKey={folderShaKey}
        {...props}
      />
    ))}
  </NestedList>
);

export default memo(SidebarNestedList);
