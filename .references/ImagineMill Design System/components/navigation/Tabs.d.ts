import * as React from 'react';

export type TabItem = string | { value: string; label: React.ReactNode };

/** Underline tab bar with the animated brand-gradient indicator. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs as strings or {value,label}. */
  items?: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Initial value when uncontrolled. */
  defaultValue?: string;
  /** Fires with the newly selected value. */
  onChange?: (value: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
