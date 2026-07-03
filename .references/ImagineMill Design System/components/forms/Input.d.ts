import * as React from 'react';

/** Labelled text input with hint and error states. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field red and replaces the hint. */
  error?: React.ReactNode;
  /** Extra class on the wrapping .im-field. */
  containerClassName?: string;
}

export function Input(props: InputProps): JSX.Element;
