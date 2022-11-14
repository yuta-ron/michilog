import * as React from 'react';

export class Block extends React.Component {
  render () {
    return (
      <div className='flex h-48 mx-10'>
        <div className='my-auto h-full w-1/3 bg-blue-400 rounded-lg mr-2'>
          h-full
        </div>
        <div className='my-auto h-full w-1/3 bg-blue-400 rounded-lg mr-2'>
          h-full
        </div>
        <div className='m-auto h-full w-1/3 bg-blue-400 rounded-lg'>h-full</div>
      </div>
    );
  }
}
