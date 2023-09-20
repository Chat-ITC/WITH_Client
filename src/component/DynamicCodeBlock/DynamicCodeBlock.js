import React from 'react';

function DynamicCodeBlock({ content }) {
  // 글 내용에서 코드 블록을 추출하는 정규식 패턴 예제
  const codeBlocks = content.match(/```c([\s\S]*?)```/g);

  return (
    <div>
      {codeBlocks && codeBlocks.map((block, index) => (
        <pre key={index}>
          <code>
            {block.replace(/```c|```/g, '')}
          </code>
        </pre>
      ))}
    </div>
  );
}

export default DynamicCodeBlock;