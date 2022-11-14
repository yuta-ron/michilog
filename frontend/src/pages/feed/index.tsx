/* eslint "react/display-name": "off" */

import React, { useEffect, useState } from 'react';
import { Header } from '../../components/organisms/Header';
import { Feed } from '../../components';
import { fetchMapList } from 'libs/aspida';
import { useRouter } from 'next/router';
import { MapListItem } from 'types';

export default () => {
  const router = useRouter();
  const [mapList, setMapList] = useState<MapListItem[]>([]);
  const { pageQuery } = router.query;

  useEffect(() => {
    const fetch = async () => {
      const page = Number(pageQuery);
      if (page) {
        setMapList(await fetchMapList(page));
      } else {
        setMapList(await fetchMapList(1));
      }
    };

    fetch();
  }, [pageQuery]);

  return (
    <>
      <Header />
      <Feed items={mapList} />
    </>
  );
};
