import React from 'react';
import { MapListItem } from 'types';
/* eslint-disable import/no-absolute-path */
import blankThumbnail from '/public/assets/kanban_jyunbi.png';

export const FeedTile = (prop: MapListItem) => {
  const thumbnail = prop.thumbnail ? (
    <img
      className='rounded-lg object-full overflow-hidden'
      src={prop.thumbnail}
    />
  ) : (
    <img
      src={blankThumbnail.src}
      className='rounded-lg object-full overflow-hidden'
    />
  );

  return (
    <div
      className='cursor-pointer'
      onClick={() => {
        location.href = '/maps/' + prop.id;
      }}
    >
      <div className='w-full h-56 bg-gray-900 rounded-lg sahdow-lg flex flex-col'>
        {thumbnail}
      </div>
      <div className='w-full mt-3 mb-1'>
        <div className='font-bold text-lg'>{prop.title}</div>
        <p className='py-2 text-gray-600 text-sm'>{prop.description}</p>
      </div>
    </div>
  );
};
