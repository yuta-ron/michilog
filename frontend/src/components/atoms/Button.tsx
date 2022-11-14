import * as React from 'react';
interface Props {
  text: string;
  className?: string;
  onclick: () => void;
}
export class Button extends React.Component<Props> {
  render () {
    return (
      <button
        onClick={this.props.onclick}
        className={
          this.props.className ??
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        }
      >
        {this.props.text}
      </button>
    );
  }
}
