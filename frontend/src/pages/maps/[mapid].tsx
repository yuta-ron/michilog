/* eslint "react/display-name": "off" */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MappyMap } from '../../components';
import { Header } from '../../components/organisms/Header';
import { mapState } from 'types/state';
import { useRecoilState } from 'recoil';
import { fetchMap } from 'libs/aspida';
import { PlaceList } from 'components/organisms/PlaceList';

export default () => {
  const router = useRouter();
  const style = {
    width: '90%',
    margin: '0 auto'
  };
  const [mapId, setMapId] = useState<number | null>(null);
  const [recoilMapState, setRecoilMapState] = useRecoilState(mapState);

  useEffect(() => {
    const { mapid } = router.query;
    if (mapid) {
      setMapId(Number(mapid));
    }

    // location.href = '/map/add';

    // if (router.asPath !== router.route) {
    //   const { mapid } = router.query;
    //   if (Number.isInteger(mapId)) {
    //     setMapId(Number(mapid));
    //   }
    //   // APIに問い合わせてmapが存在するかどうか。
    //   return;
    // }
  }, [router]);

  useEffect(() => {
    const f = async () => {
      try {
        if (mapId) {
          const data = await fetchMap(mapId);
          setRecoilMapState(data);
        }
      } catch (err) {}
    };
    f();
  }, [mapId]);

  if (!recoilMapState) {
    return (
      <>
        <Header />
        <p>data is nothing</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className='h-screen' style={style}>
        <MappyMap
          mapData={recoilMapState}
          containerStyle={{}}
          viewMode={true}
        />
        <PlaceList />
      </div>
    </>
  );
};
