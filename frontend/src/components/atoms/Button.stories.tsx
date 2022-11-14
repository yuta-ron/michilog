import React from 'react';
import { Button } from './Button';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Mappy/Button',
  component: Button
};

export const Default = () => {
  return (
    <RecoilRoot>
      <Button text='テストボタン' onclick={() => {}} />
    </RecoilRoot>
  );
};
