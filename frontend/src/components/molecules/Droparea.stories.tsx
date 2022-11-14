import React from 'react';
import { DropArea } from './DropArea';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Mappy/DropArea',
  component: DropArea
};

export const Default = () => {
  return (
    <RecoilRoot>
      <DropArea />
    </RecoilRoot>
  );
};
