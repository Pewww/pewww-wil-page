import React, { useMemo } from 'react';
import styled from 'styled-components';
import { $SIDEBAR_WIDTH, $LINK, $LINK_BACKGROUND, $WHITE } from '../../styles/variables.styles';
import { observer } from 'mobx-react';
import useMobxStore from '../../hooks/useMobxStore';
import { decode } from 'js-base64';
import { Converter } from 'showdown';
import parse from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

const Content: React.FC = observer(() => {
  const {
    repoStore: {
      content
    }
  } = useMobxStore();

  const parsedContent = useMemo(() => {
    const converter = new Converter();
    const decodedContent = decode(content);
    const markdownToHtml = converter.makeHtml(decodedContent);
    const htmlContent = parse(markdownToHtml) as JSX.Element[];

    console.log(htmlContent);

    // For code highlighting
    const reParsedHtmlContent = htmlContent.map(c =>
      c.type === 'pre'
        ? (
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
          >
            {c.props.children.props.children}
          </SyntaxHighlighter>
        )
        : c
      );

    return reParsedHtmlContent;
  }, [content]);

  return (
    <ContentWrapper>
      {parsedContent}
    </ContentWrapper>
  );
});

export default Content;
