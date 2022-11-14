import * as React from 'react';

export class HeaderLoggedOut extends React.Component {
  loginFunc () {}

  render () {
    return (
      <div>
        <button onClick={this.loginFunc}>ログインしてね</button>
        <a onClick={this.loginFunc}>aaaaaaaa</a>
      </div>
    );
  }
}
