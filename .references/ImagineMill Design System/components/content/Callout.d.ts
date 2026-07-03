import * as React from 'react';

/** Highlighted note block for tutorial / documentation content. Ships sensible default icons per type. */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  type?: 'tip' | 'info' | 'warning' | 'danger';
  /** Optional bold heading line. */
  title?: React.ReactNode;
  /** Override the leading icon. Pass `null` to hide it. */
  icon?: React.ReactNode | null;
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps): JSX.Element;
