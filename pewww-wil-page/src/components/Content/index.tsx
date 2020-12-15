import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { decode } from 'js-base64';
import { Converter } from 'showdown';
import parse from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

import { $SIDEBAR_WIDTH, $LINK, $LINK_BACKGROUND, $WHITE } from '../../styles/variables.styles';
import useMobxStore from '../../hooks/useMobxStore';
import { getRandomId } from '../../libs/random';

const ContentWrapper = styled.main`
  float: right;
  width: calc(100% - ${$SIDEBAR_WIDTH}px);
  height: 100%;
  background-color: ${$WHITE};
  box-sizing: border-box;
  padding: 30px 40px;
  overflow: auto;
  
  p, ol, ul {
    font-family: 'Gotham Light';

    a {
      color: ${$LINK};
      background-color: ${$LINK_BACKGROUND};
    }
  }

  h2 {
    font-family: 'Gotham Medium';
    font-size: 1.75em;
  }

  pre {
    padding: 20px !important;
    border-radius: 4px;
  }

  pre, code {
    font-family: 'SFMono Regular';
    font-size: 13px;
  }
`;

const Content: React.FC<RouteComponentProps> = observer(router => {
  const {
    location: {
      search
    }
  } = router;

  const {
    repoStore: {
      getReadmeFile,
      readme
    }
  } = useMobxStore();

  const { readmeShaKey } = queryString.parse(search);

  useEffect(() => {
    if (readmeShaKey) {
      getReadmeFile('Pewww', 'WIL', readmeShaKey);
    }
  }, [readmeShaKey, getReadmeFile]);

  const parsedContent = useMemo(() => {
    const converter = new Converter();
    const decodedContent = decode(readme);
    const markdownToHtml = converter.makeHtml(decodedContent);
    const htmlContent = parse(markdownToHtml) as JSX.Element[];

    // For code highlighting
    const reParsedHtmlContent = htmlContent.map(c =>
      c.type === 'pre'
        ? (
          <SyntaxHighlighter
            key={c?.key ?? getRandomId()}
            language="typescript"
            style={atomOneDark}
          >
            {c.props.children.props.children}
          </SyntaxHighlighter>
        )
        : c
      );

    return reParsedHtmlContent;
  }, [readme]);

  return (
    <ContentWrapper>
      {parsedContent}
    </ContentWrapper>
  );
});

export default withRouter(Content);
