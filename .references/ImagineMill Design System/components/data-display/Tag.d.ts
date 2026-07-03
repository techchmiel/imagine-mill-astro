import * as React from 'react';

/** Topic / category chip with the signature circuit-node dot. Use for tags like "Microsoft 365", "Cloud", "AI". */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "blue" */
  variant?: 'blue' | 'green' | 'red' | 'solid';
  /** Show the leading rounded-square node marker. @default true */
  node?: boolean;
  /** Renders an anchor when set. */
  href?: string;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
