import React, { ReactNode, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getUser } from '../libs/api';
import { buildUserInfoFromJson } from '../libs/util';
import { userInfoState } from '../types/state';

type Props = {
  children: ReactNode;
};

export default function AuthProvider ({ children, ...props }: Props) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useLayoutEffect(() => {
    if (userInfo) return;

    getUser()
      .then((result) => {
        // Todo: 定数化
        const ui = buildUserInfoFromJson(result.data);
        setUserInfo(ui);
      })
      .catch(() => {
        setUserInfo(null);
      });
  });

  return <div {...props}>{children}</div>;
}
