import * as React from 'react';
import { ButtonBaseProps } from 'types/elm';

export type ButtonProps = {
  text: string;
  isLoading?: boolean;
} & ButtonBaseProps;

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={
        props.className ??
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
    >
      {props.isLoading && (
        <div className='pr-2 inline-block'>
          <div
            className='rounded-full animate-spin h-4 w-4 border-2 border-gray-500 '
            style={{ borderTopColor: 'transparent' }}
          ></div>
        </div>
      )}

      {props.text}
    </button>
  );
};
