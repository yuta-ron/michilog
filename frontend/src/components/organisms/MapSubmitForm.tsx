import { Button } from 'components/atoms/Button';
import { createMap } from 'libs/aspida';
import React, { useState } from 'react';
import { MapInfo } from 'types';

export const MapSubmitForm = () => {
  const [mapName, setMapName] = useState('');
  const [created, setCreated] = useState(false);
  const [cliecked, setClicked] = useState(false);
  const isError = false;

  const butonStyleBase =
    'block w-full mt-5 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 ';

  return (
    <div className='m-auto max-w-screen-md px-8 md:px-32 lg:px-24'>
      <div className='bg-white rounded-md shadow-2xl p-5'>
        <h1 className='text-gray-800 font-bold text-2xl mb-1'>
          この記録に名前をつけましょう
        </h1>
        <p className='text-sm font-normal text-gray-600 mb-8'>
          行ってきた場所の名前を教えてください
        </p>
        {isError ?? (
          <p className='text-sm font-normal text-red-600 mb-8'>
            登録時にエラーが発生しました
          </p>
        )}
        <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
            />
          </svg> */}
          <input
            id='mapname'
            className=' pl-2 w-full outline-none border-none'
            type='text'
            name='mapname'
            placeholder='弾丸東北旅行'
            value={mapName}
            onChange={(e) => {
              setMapName(e.target.value);
            }}
          />
        </div>
        <Button
          type='submit'
          disabled={mapName.length <= 0 || cliecked}
          isLoading={cliecked && !created}
          className={
            butonStyleBase +
            'disabled:opacity-50  bg-green-600 hover:bg-green-700'
          }
          onClick={async () => {
            setClicked(true);
            const info: MapInfo = { name: mapName };
            const res: any = await createMap(info);
            if (!res?.id) {
              setClicked(false);
              setCreated(false);
            }

            setCreated(true);
            setTimeout(() => {
              window.location.href = '/maps/' + res.id + '/edit';
            }, 1000);
          }}
          text={created ? '作成しました！' : '作成'}
        ></Button>
      </div>
    </div>
  );
};
