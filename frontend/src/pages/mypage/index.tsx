/* eslint "react/display-name": "off" */
import { Feed } from 'components';
import { fetchMapList } from 'libs/aspida';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { MapListItem } from 'types';
import { paginationOperaton, userInfoState } from 'types/state';
import { Header } from '../../components/organisms/Header';

export default () => {
  const userInfo = useRecoilValue(userInfoState);

  const router = useRouter();
  const [totalMapCount, setTotalMapCount] = useState<number>(0);
  const [mapList, setMapList] = useState<MapListItem[]>([]);
  const pagination = useRecoilValue(paginationOperaton);
  const { pageQuery } = router.query;

  const fetch = async (page: number) => {
    const query = {
      page: page,
      userId: userInfo?.id
    };

    const ret = await fetchMapList(query);

    setTotalMapCount(ret.total);
    setMapList(ret.result);
  };

  useEffect(() => {
    const p = parseInt(pageQuery as string, 10) || pagination.page;
    fetch(p);
  }, [pagination.page]);

  const userCard = (
    <>
      <div className='flex justify-center'>
        <img
          className='rounded-full'
          style={{ width: '150px', height: '150px' }}
          src={userInfo?.icon_url}
        ></img>
      </div>
      <div className='flex justify-center'>
        <span>{userInfo?.name}</span>
      </div>
      <div className='flex justify-center'>
        <span>投稿したマップの数: {userInfo?.meta.map_count}</span>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className='mb-5'>{userInfo && userCard}</div>
      <Feed totalCount={totalMapCount} items={mapList} />
    </>
  );
};
