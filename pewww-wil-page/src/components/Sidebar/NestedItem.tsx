import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

import { ContentFile } from '../../@types/repo';
import { $FONT, $DARK } from '../../styles/variables.styles';

const NestedItem = styled.li`
  list-style: none;
  color: ${$FONT};
  font-family: 'Gotham Light';
  font-size: 14px;
  line-height: 2;

  span {
    position: relative;

    &.underline:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${$DARK};
      top: 120%;
      left: 0;
    }
  }
`;

interface SidebarNestedItemProps extends ContentFile, RouteComponentProps {
  folderName: string;
  folderShaKey: string;
}

const SidebarNestedItem: React.FC<SidebarNestedItemProps> = ({
  path,
  sha,
  folderName,
  folderShaKey,
  history,
  location: {
    search
  }
}) => {
  const { readmeTitle } = queryString.parse(search);

  const [pathWithoutExtension] = path.split('.');

  const clickNestedItem = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    history.replace(`/?${queryString.stringify({
      folderName,
      folderShaKey,
      readmeShaKey: sha,
      readmeTitle: pathWithoutExtension,
    })}`);
  }, [
    history,
    folderName,
    folderShaKey,
    pathWithoutExtension,
    sha
  ]);

  const pathSpanClassName = pathWithoutExtension === readmeTitle
    ? 'underline'
    : '';

  return (
    <NestedItem onClick={clickNestedItem}>
      -&nbsp;
      <span className={pathSpanClassName}>
        {pathWithoutExtension}
      </span>
    </NestedItem>
  );
};

export default memo(
  withRouter(SidebarNestedItem)
);
