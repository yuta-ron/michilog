import { FeedTile } from 'components/molecules/FeedTile';
import React from 'react';
import { MapListItem } from 'types';

type FeedProps = {
  items: MapListItem[];
};

export const Feed = (props: FeedProps) => {
  const tiles = props.items.map((item, key) => (
    <FeedTile key={key} {...item} />
  ));
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-6 my-5'>
      {tiles}
    </div>
  );
};
//   return (
//     <>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-5'>
//         {/* <button
//           onClick={() => {
//             fetchMap("1");
//           }}
//         >
//           登録がありません
//         </button> */}
//         {elms()}
//       </div>
//     </>
//   );
// };
