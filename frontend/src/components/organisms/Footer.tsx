import * as React from 'react';

interface State {}

export class Footer extends React.Component<State> {
  componentDidMount () {
    console.log('Footer mounted');
  }

  render () {
    return (
      <footer className='w-full bg-gray-200'>
        <p className='p-2 text-center text-xs'>
          Copyright © {new Date().getFullYear()} Michilog, All Rights Reserved.
        </p>
      </footer>
    );
  }
}
