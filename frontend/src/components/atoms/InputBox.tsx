import React from 'react';

type InputBoxProps = {
  id: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputBox = (props: InputBoxProps) => {
  return (
    <input
      type='text'
      id={props.id}
      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800'
      value={props.defaultValue}
      onChange={props.onChange}
    />
  );
};
