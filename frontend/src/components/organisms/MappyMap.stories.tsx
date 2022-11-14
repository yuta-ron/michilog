import React from 'react';
import { MappyMap } from './MappyMap';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Mappy/MappyMap',
  component: MappyMap
};

export const Default = () => {
  // const data: any = {
  //   routes: [],
  //   locations: [
  //     {
  //       title: '富良野に行ったよー',
  //       description: '楽しかったー。',
  //       latlng: {
  //         lat: 42.705429836144,
  //         lng: 141.28952911657
  //       },
  //       movie_url: 'https://www.youtube.com/watch?v=KyMSpvOYbX4',
  //       routes_info: []
  //     }
  //   ],
  //   description: 'test map'
  // };

  return <RecoilRoot>{/* <MappyMap mapData={data} /> */}</RecoilRoot>;
};
