import React from 'react';
import { Button } from 'components/atoms/Button';
import { useRecoilValue } from 'recoil';
import { ButtonBaseProps } from 'types/elm';
import { mapState } from 'types/state';

export const MapEditButton = (props: ButtonBaseProps) => {
  const recoilMapState = useRecoilValue(mapState);
  return (
    <>
      <Button
        {...props}
        onClick={() => {
          window.location.href = `/maps/${recoilMapState.id}/edit`;
        }}
        text='編集する'
      ></Button>
    </>
  );
};
