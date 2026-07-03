import * as React from 'react';

/** Small status/label pill (uppercase, display type). Use for statuses, counts, "NEW", "VIDEO", etc. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'info' | 'success' | 'danger' | 'warn' | 'navy' | 'outline';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
