import * as React from 'react';

/** Circular avatar with image or initials fallback (over the brand gradient). */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — used for initials and the title attribute. */
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Add the brand focus ring. @default false */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
