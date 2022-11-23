/* eslint "react/display-name": "off" */

// Recoilのサンプルコード
// https://www.kwbtblog.com/entry/2020/11/07/032250
// import React from "react";
// import {
//   RecoilRoot,
//   atom,
//   useRecoilState,
//   useRecoilValue
// } from 'recoil';

// const countAtom = atom<number>({
//   key: 'countAtom',
//   default: 0
// });

// function UpDown () {
//   const [count, setCount] = useRecoilState(countAtom);
//   return (
//       <div className="flex h-48">
//           <button onClick={() => setCount(count - 1)}>Down</button>
//           <button onClick={() => setCount(count + 1)}>Up</button>
//       </div>
//   );
// }

// function ViewCount () {
//   const count = useRecoilValue(countAtom);

//   return (
//       <div>
//           Current count is {count}!
//       </div>
//   );
// }

// export default () => (
//   <div>
//     <RecoilRoot>
//       <UpDown />
//       <ViewCount />
//     </RecoilRoot>
//   </div>
// );

import React from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'types/state';
import { Header } from '../../components/organisms/Header';

export default () => {
  const userInfo = useRecoilValue(userInfoState);

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
      <div className='h-96'>{userInfo && userCard}</div>
    </>
  );
};
