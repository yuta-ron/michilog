import React, { useState } from 'react';
import { Button } from 'components/atoms/Button';
import { ButtonBaseProps } from 'types/elm';
import { deleteMap } from 'libs/aspida';
import { mapState } from 'types/state';
import { useRecoilValue } from 'recoil';

export const MapDeleteButton = (props: ButtonBaseProps) => {
  const recoilMapState = useRecoilValue(mapState);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <>
      <Button
        text='削除する'
        {...props}
        disabled={isDeleting}
        isLoading={isDeleting}
        onClick={async () => {
          setIsDeleting(true);
          await deleteMap(recoilMapState.id);
          setIsDeleting(false);
          window.location.href = '/feed';
        }}
      />
    </>
  );
};
