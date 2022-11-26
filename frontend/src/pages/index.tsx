import React from 'react';
import { Button, Header, OldExample } from '../components';

const index = () => {
  return (
    <>
      <Header />
      <div>
        <div className='mb-10'>
          <div className='mb-10 max-w-2xl mx-auto'>
            <h2 className='text-center text-xl font-bold'>
              動き方は千差万別、作って距離ガバ自慢しよう。
            </h2>
            <video autoPlay loop muted playsInline className='mx-auto'>
              <source
                src='https://user-images.githubusercontent.com/18624396/201697363-968dace9-21c6-41e0-bae5-5f8bf833f809.mp4'
                type='video/mp4'
              />
            </video>
          </div>
          <div className='text-center'>
            <Button
              text='他の人のを見る'
              onClick={() => {
                window.location.href = '/feed';
              }}
            />
          </div>
          <div style={{ margin: '56px' }}>
            <h2 className='text-center text-xl font-bold'>
              スクショを貼るのはもう卒業
            </h2>
            <OldExample />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
