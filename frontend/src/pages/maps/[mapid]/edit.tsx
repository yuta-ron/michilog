/* eslint "react/display-name": "off" */

import React, { useEffect, useState } from 'react';
import { MappyMap, DropArea, LayerEditor, Button } from '../../../components';
import { Header } from '../../../components/organisms/Header';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { mapState } from '../../../types/state';
import { fetchMap, updateMap } from 'libs/aspida';
import { isMobile } from 'react-device-detect';

export default () => {
  const router = useRouter();
  const [recoilMapState, setRecoilMapState] = useRecoilState(mapState);
  const [mapName, setMapName] = useState<string>('');
  const [mapDescription, setDescription] = useState<string>('');
  const [mapId, setMapId] = useState<number | null>(null);

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { mapid } = router.query;
      setMapId(Number(mapid));
    }
  }, [router]);

  useEffect(() => {
    const f = async () => {
      if (mapId) {
        const data = await fetchMap(mapId);
        if (data) {
          setRecoilMapState(data);
        }
      }
    };
    f();
  }, [mapId]);

  useEffect(() => {
    setMapName(recoilMapState.name);
  }, [recoilMapState.name]);

  useEffect(() => {
    setDescription(recoilMapState.description);
  }, [recoilMapState.description]);

  if (isMobile) {
    return (
      <>
        <Header />
        <h1>スマホでは編集機能を利用できません🙇‍♂️</h1>
      </>
    );
  }

  if (!recoilMapState) {
    return <div>loading</div>;
  }

  return (
    <>
      <Header />
      <div className='flex gap-10'>
        <div
          id='edit-map-viewer'
          className='flex-col flex-1 bg-blue-50 px-3 py-2'
        >
          <div className='w-full'>
            <label
              htmlFor='map-title'
              className='block text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              タイトル
            </label>
            {/* descriptionのエリア作る */}
            <input
              type='text'
              id='map-title'
              className='mt-1 mb-5 mx-1 w-2/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='名前を入れてください'
              value={mapName}
              onChange={(e) => {
                setMapName(e.target.value);
              }}
              onBlur={() => {
                setRecoilMapState({
                  ...recoilMapState,
                  name: mapName
                });
              }}
            ></input>
            <label
              htmlFor='map-description'
              className='block text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              ひとこと
            </label>
            <textarea
              id='map-description'
              rows={3}
              className='mt-1 mb-5 mx-1 w-full resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='名前を入れてください'
              value={mapDescription}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              onBlur={() => {
                setRecoilMapState({
                  ...recoilMapState,
                  description: mapDescription
                });
              }}
            />
            <div className='text-right pb-2'>
              <Button
                text='保存'
                onclick={async () => {
                  if (recoilMapState) {
                    await updateMap(recoilMapState);
                  }
                }}
              />
            </div>
          </div>
          <div className='flex-row'>
            <MappyMap mapData={recoilMapState} viewMode={false} />
          </div>
          <div className='flex-row'>
            <DropArea />
          </div>
        </div>
        <div className='flex-col basis-4/5 bg-blue-50 px-3 py-2'>
          <div className='flex-row'>
            <LayerEditor />
          </div>
        </div>
      </div>
    </>
  );
};
