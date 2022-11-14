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
import { Header } from '../../components/organisms/Header';

export default () => (
  <>
    <Header />
    <div style={{ height: '1000px' }}>マイページは今準備中！</div>
  </>
);
