import { FeedTile } from 'components/molecules/FeedTile';
import React from 'react';
import { MapListItem } from 'types';
import { FeedPagination } from './FeedPagination';

type FeedProps = {
  totalCount: number;
  items: MapListItem[];
};

export const Feed = (props: FeedProps) => {
  if (props.items.length <= 0) {
    return <>登録がありません</>;
  }

  const tiles = props.items.map((item, key) => (
    <FeedTile key={key} {...item} />
  ));
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-6 my-5'>
        {tiles}
      </div>
      <FeedPagination currentPage={1} totalPage={props.totalCount / 20} />
    </>
  );
};
