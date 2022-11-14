/* eslint "react/display-name": "off" */

// Recoilのサンプルコード
// https://www.kwbtblog.com/entry/2020/11/07/032250
import React from 'react';
import { LoginForm } from '../../components';
import { Header } from '../../components/organisms/Header';

export default () => (
  <div>
    <Header />
    <LoginForm />
  </div>
);
