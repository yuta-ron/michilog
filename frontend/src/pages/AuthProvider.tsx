import React, { ReactNode, useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getUser } from '../libs/api';
import { buildUserInfoFromJson } from '../libs/util';
import { userInfoState } from '../types/state';

type Props = {
  children: ReactNode;
};

export default function AuthProvider ({ children, ...props }: Props) {
  const setUserInfo = useSetRecoilState(userInfoState);
  // const router = useRouter();

  useLayoutEffect(() => {
    // console.log(router.pathname);
    // if (userInfo) return;

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
