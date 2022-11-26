/* eslint "react/display-name": "off" */

import React, { useEffect, useState } from 'react';
import { Header } from '../../components/organisms/Header';
import { Feed } from '../../components';
import { fetchMapList } from 'libs/aspida';
import { useRouter } from 'next/router';
import { MapListItem } from 'types';
import { paginationOperaton } from 'types/state';
import { useRecoilValue } from 'recoil';

export default () => {
  const router = useRouter();
  const [totalMapCount, setTotalMapCount] = useState<number>(0);
  const [mapList, setMapList] = useState<MapListItem[]>([]);
  const pagination = useRecoilValue(paginationOperaton);
  const { pageQuery } = router.query;

  const fetch = async (page: number) => {
    const query = {
      page: page,
      limit: 20
    };

    const ret = await fetchMapList(query);

    setTotalMapCount(ret.total);
    setMapList(ret.result);
  };

  useEffect(() => {
    const p = parseInt(pageQuery as string, 10) || pagination.page;
    fetch(p);
  }, [pagination.page]);

  return (
    <>
      <Header />
      <Feed totalCount={totalMapCount} items={mapList} />
    </>
  );
};
