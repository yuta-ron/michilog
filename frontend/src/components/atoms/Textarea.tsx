import React from 'react';

type TextareaProps = { };

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"></textarea>
  );
};
