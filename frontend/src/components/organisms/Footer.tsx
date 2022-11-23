import * as React from 'react';

interface State {}

export class Footer extends React.Component<State> {
  componentDidMount () {
    console.log('Footer mounted');
  }

  render () {
    return (
      <footer className='bottom-0'>
        <p className=' text-center text-xs'>
          Copyright © {new Date().getFullYear()} michilog, All Rights Reserved.
        </p>
      </footer>
    );
  }
}
