import * as React from 'react';

/**
 * ImagineMill primary action button. Renders <button>, or <a> when `href` is set.
 *
 * @startingPoint section="Actions" subtitle="Primary, ink, green, secondary, ghost & danger buttons" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'ink' | 'green' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** When set, renders an anchor instead of a button. */
  href?: string;
  /** Icon element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to full container width. @default false */
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
