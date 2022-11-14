import React, { useEffect } from 'react';
import { Header } from '../components';

const index = () => {
  useEffect(() => {
    // const func = async () => {
    //   const res = await fetchMap(1);
    //   console.log(res);
    // };
    // func();
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: '1000px' }}>
        <>トップは今準備中！</>
        <>
          <a href='https://michilog.yutaron.work/feed/'>
            マップ一覧はこちらから
          </a>
        </>
      </div>
    </>
  );
};

export default index;
