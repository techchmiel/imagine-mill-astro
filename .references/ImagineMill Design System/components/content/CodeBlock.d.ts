import * as React from 'react';

/** Dark code block with a window bar, node-colored dots, and a language label. Ideal for PowerShell / CLI snippets. */
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Code text. Alternatively pass as children. */
  code?: string;
  /** Language label shown top-right. @default "powershell" */
  language?: string;
  /** Optional filename shown in the bar. */
  filename?: string;
  children?: React.ReactNode;
}

export function CodeBlock(props: CodeBlockProps): JSX.Element;
