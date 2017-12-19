import React from 'react'
import styled from 'styled-components'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const Wrapper = styled.div`
  padding: 0 20px;
  border-radius: 10px;
`

const CodeBlock = ({code}) => {
  return (
    <Wrapper>
      <SyntaxHighlighter
        language='java'
        style={docco}
        showLineNumbers={true}
      >
        {code || ''}
      </SyntaxHighlighter>
    </Wrapper>
  )
}

export default CodeBlock
