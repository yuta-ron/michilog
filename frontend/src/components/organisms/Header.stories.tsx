import React from 'react';
import { Header } from './Header';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Mappy/Header',
  component: Header
};

export const Default = () => {
  return (
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  );
};

export const Logined = () => {
  return (
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  );
};
