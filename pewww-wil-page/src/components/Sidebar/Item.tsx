import React, { useState, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import isEmpty from 'lodash.isempty';

import { Content } from '../../@types/repo';
import { formatDate } from '../../libs/date';
import { $FONT } from '../../styles/variables.styles';
import arrowIcon from '../../assets/icons/right-arrow.png';
import useMobxStore from '../../hooks/useMobxStore';
import SidebarNestedList from './NestedList';

const Item = styled.li`
  position: relative;
  list-style: none;
  padding-left: 20px;
  line-height: 3;
  cursor: pointer;

  &:last-child {
    margin-bottom: 30px;
  }

  span {
    font-family: 'Gotham Light';
    font-size: 14px;
    color: ${$FONT};
    vertical-align: middle;
  }

  img {
    position: absolute;
    margin-top: 18px;
    right: 158px;
    width: 12px;
    transition: .2s;

    &.opened {
      transform: rotate(90deg);
    }
  }
`;

interface SidebarItemProps extends Content, RouteComponentProps {}

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  sha,
  location: {
    search
  }
}) => {
  const {
    folderName,
    folderShaKey
  } = queryString.parse(search);

  const {
    repoStore: {
      getFilesInFolder,
      filesInFolder
    }
  } = useMobxStore();

  const [isOpened, setIsOpened] = useState(false);

  const fetchFilesInFolder = useCallback(
    async(shaKey: string, callback: () => void) => {
      await getFilesInFolder('Pewww', 'WIL', shaKey);
      callback();
    }, [getFilesInFolder]
  );

  useEffect(() => {
    const isFolderOpened = name === folderName;

    if (isFolderOpened) {
      fetchFilesInFolder(folderShaKey! as string, () => {
        setIsOpened(true);
      });
    }
  }, [
    name,
    folderName,
    folderShaKey,
    fetchFilesInFolder
  ]);

  const clickItem = useCallback(() => {
    fetchFilesInFolder(sha, () => {
      setIsOpened(curr => !curr);
    });
  }, [fetchFilesInFolder, sha]);

  const arrowIconAlt = isOpened
    ? '닫기'
    : '열기';

  const arrowIconClassName = isOpened
    ? 'opened'
    : '';

  const formattedDate = formatDate(name, 'YYYY/MM/DD');

  return (
    <Item onClick={clickItem}>
      <span>{formattedDate}</span>
      <img
        src={arrowIcon}
        alt={arrowIconAlt}
        className={arrowIconClassName}
      />
      {(isOpened && !isEmpty(filesInFolder[sha])) && (
        <SidebarNestedList
          folderName={name}
          folderShaKey={sha}
          files={filesInFolder[sha]}
        />
      )}
    </Item>
  );
};

export default memo(
  withRouter(SidebarItem)
);
