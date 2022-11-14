import * as React from 'react';
interface Props {
  title: string,
}
interface State {}
export class UserName extends React.Component<Props, State> {
  render () {
    return (
      <div className="title">
        {this.props.title}
      </div>
    );
  }
}
