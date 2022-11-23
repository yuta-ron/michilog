import * as React from 'react';

type BaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  text: string;
  isLoading?: boolean;
} & BaseProps;

export class Button extends React.Component<ButtonProps> {
  render () {
    return (
      <button
        {...this.props}
        onClick={this.props.onClick}
        className={
          this.props.className ??
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        }
      >
        {this.props.isLoading && (
          <div className='pr-2 inline-block'>
            <div
              className='rounded-full animate-spin h-6 w-6 border-2 border-gray-500 '
              style={{ borderTopColor: 'transparent' }}
            ></div>
          </div>
        )}

        {this.props.text}
      </button>
    );
  }
}
