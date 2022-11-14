import * as React from 'react';
interface Props {
  text: string;
}
export class Input extends React.Component<Props> {
  render () {
    return (
      <div>
        <input type='text' className='font-bold py-2 px-4 rounded border-4' />
      </div>
    );
  }
}
