import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import { Button } from 'components/atoms/Button';
import { TwitterLogin, TwitterLogout } from 'libs/auth';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'types/state';
/* eslint-disable import/no-absolute-path */
import logoImg from '/public/assets/logo.png';

export const Header = () => {
  const userInfo = useRecoilValue(userInfoState);

  // Todo LocalStorageからユーザ名とアイコン画像情報持ってくる。
  useLayoutEffect(() => {
    const toggleBtn = document.getElementById('navbar-toggle');
    const collapse = document.getElementById('navbar-collapse');
    if (toggleBtn && collapse) {
      toggleBtn.onclick = () => {
        collapse.classList.toggle('hidden');
      };
    }
  }, [userInfo]);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <div className='inline-block w-36 min-w-xs'>
          <a href='/' className='font-bold text-xl'>
            <img src={logoImg.src} />
            {/* <Image src={logoImg} layout='fill' /> */}
          </a>
        </div>
      </div>
      <div className='block md:hidden'>
        {userInfo ? (
          <button
            id='navbar-toggle'
            className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        ) : (
          <div className='rounded text-sm  px-5 py-3 border-2 border-style-500'>
            {/* ログインしていなかったら */}
            <Button className='' onclick={TwitterLogin} text='ログイン' />
          </div>
        )}
      </div>
      <div
        id='navbar-collapse'
        className='hidden w-full block flex-grow md:flex md:items-center md:w-auto'
      >
        {/* ここにプロフィール情報とか */}
        <div className='text-sm md:flex-grow' />
        <div className='text-sm align-middle'>
          {userInfo ? (
            <div className='inline-block border-none'>
              <Image
                className='mx-3 rounded-full'
                width='32px'
                height='32px'
                src={userInfo.icon_url || ''}
              />

              {/* <Button
                onclick={() => {
                  TwitterLogout();
                }}
                className='px-3 inline-block'
                text='ログアウト'
              /> */}
              <span className='inline-block px-3 '>
                {/* <Button
                  onclick={() => {
                    window.location.href = '/mypage';
                  }}
                  className='px-3 inline-block'
                  text='マイページへ'
                /> */}
                <Button
                  onclick={() => {
                    window.location.href = '/maps/add';
                  }}
                  className='px-3 inline-block bg-red-600 text-white p-1 rounded font-semibold'
                  text='追加する'
                />
                <Button
                  onclick={TwitterLogout}
                  className='px-3 inline-block'
                  text='ログアウト'
                />
              </span>
            </div>
          ) : (
            <div className='rounded px-5 py-3 md:border-2 border-style-500'>
              {/* ログインしていなかったら */}
              <Button className='' onclick={TwitterLogin} text='ログイン' />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
