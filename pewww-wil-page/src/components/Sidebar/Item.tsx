import React, { useState, useCallback, memo } from 'react';
import styled from 'styled-components';
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

interface SidebarItemProps extends Content {}

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  sha
}) => {
  const {
    repoStore: {
      getFilesInFolder,
      filesInFolder
    }
  } = useMobxStore();

  const [isOpened, setIsOpened] = useState(false);

  const clickItem = useCallback(() => {
    (async() => {
      await getFilesInFolder('Pewww', 'WIL', sha);
      setIsOpened(curr => !curr);
    })();
  }, [getFilesInFolder, sha]);

  const arrowIconAlt = isOpened
    ? '닫기'
    : '열기';

  const arrowIconClassName = isOpened
    ? 'opened'
    : '';

  return (
    <Item onClick={clickItem}>
      <span>{formatDate(name, 'YYYY/MM/DD')}</span>
      <img
        src={arrowIcon}
        alt={arrowIconAlt}
        className={arrowIconClassName}
      />
      {isOpened && (
        <SidebarNestedList
          folderName={name}
          folderShaKey={sha}
          files={filesInFolder[sha]}
        />
      )}
    </Item>
  );
};

export default memo(SidebarItem);
