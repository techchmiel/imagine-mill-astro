import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/** Labelled dropdown select with the brand chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Options as plain strings or {value,label} objects. */
  options?: SelectOption[];
  /** Disabled first option shown as prompt. */
  placeholder?: string;
  containerClassName?: string;
}

export function Select(props: SelectProps): JSX.Element;
