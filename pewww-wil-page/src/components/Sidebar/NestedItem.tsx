import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { ContentFile } from '../../@types/repo';
import useMobxStore from '../../hooks/useMobxStore';
import { $FONT } from '../../styles/variables.styles';

const NestedItem = styled.li`
  list-style: none;
  color: ${$FONT};
  font-family: 'Gotham Light';
  font-size: 14px;
  line-height: 2;
`;

interface SidebarNestedItemProps extends ContentFile {
  folderName: string;
  folderShaKey: string;
}

const SidebarNestedItem: React.FC<SidebarNestedItemProps> = ({
  path,
  sha,
  folderName,
  folderShaKey
}) => {
  const {
    repoStore: {
      getReadmeFile
    }
  } = useMobxStore();

  const [pathWithoutExtension] = path.split('.');

  const clickNestedItem = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    // getReadmeFile('Pewww', 'WIL', sha);
  }, [getReadmeFile, sha]);

  return (
    <NestedItem onClick={clickNestedItem}>
      - {pathWithoutExtension}
    </NestedItem>
  );
};

export default memo(SidebarNestedItem);
