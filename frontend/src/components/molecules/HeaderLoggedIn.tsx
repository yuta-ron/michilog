import * as React from 'react';
import { Icon } from '../../components';

export class HeaderLoggedIn extends React.Component {
  render () {
    return (
      <div className="text-sm">
        <Icon />
        ログインしてます。
      </div>
    );
  }
}
