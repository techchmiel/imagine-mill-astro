import * as React from 'react';

/** Compact square button holding a single icon. */
export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "plain" */
  variant?: 'plain' | 'solid' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as tooltip). Required. */
  label: string;
  /** Renders an anchor when set. */
  href?: string;
  /** The icon element. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
