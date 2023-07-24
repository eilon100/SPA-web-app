import React, { ReactNode } from 'react';

interface ParagraphHeaderProps {
  children: ReactNode;
}

function ParagraphHeader({ children }: ParagraphHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-black">
        {children} <div className="mt-2 h-1 w-full bg-main px-2" />
      </h1>
    </div>
  );
}

export default ParagraphHeader;
