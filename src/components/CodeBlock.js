import React from 'react';

const CodeBlock = ({code}) => {
  const lines = code ? code.split(/\r\n|\r|\n/) : []
  const loc = lines.length
  console.log(loc)
  return (
    <div className="codeblock">
      <div className="linecount">
        {Array.from(Array(loc).keys()).map((index) => <div>{index + 1}</div>)}
      </div>
      <div className="code">
        {lines.map((line) => <div>{line}</div>)}
      </div>
    </div>
  )
}

export default CodeBlock
