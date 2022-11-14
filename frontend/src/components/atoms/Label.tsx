import React from 'react';

type LabelProps = { text: string, htmlFor?: string, placeholder?: string, ispassword?: boolean };

export const Label = (props: LabelProps) => {
  const defaultValue: LabelProps = { text: '', htmlFor: '', placeholder: '', ispassword: false };
  props = { ...defaultValue, ...props };

  return (
    <label className="text-base leading-relaxed text-gray-500 dark:text-gray-400" htmlFor={props.htmlFor}>
      { props.text }
    </label>
  );
};
