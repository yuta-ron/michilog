import { MapDeleteButton } from 'components/molecules/MapDeleteButton';
import { MapEditButton } from 'components/molecules/MapEditButton';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { mapState, userInfoState } from 'types/state';

export const EditPanels = () => {
  const recoilMapState = useRecoilValue(mapState);
  const recoilUserInfo = useRecoilValue(userInfoState);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {
    if (
      recoilMapState.owner_id &&
      recoilMapState?.owner_id === recoilUserInfo?.id
    ) {
      setCanEdit(true);
    }
  }, [recoilMapState, recoilUserInfo]);

  if (!canEdit) {
    return <></>;
  }

  return (
    <div className='flex flex-row-reverse my-3 mx-5'>
      <MapDeleteButton className='rounded text-white bg-red-500 mr-5 px-2 py-1' />
      <MapEditButton className='rounded text-white bg-green-500 mr-5 px-2 py-1' />
    </div>
  );
};
