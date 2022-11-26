import React, { useState } from 'react';
import { Button } from 'components/atoms/Button';
import { TwitterLogin } from 'libs/auth';
import { ButtonBaseProps } from 'types/elm';

export const LoginButton = (props: ButtonBaseProps) => {
  const [isDisabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Button
        {...props}
        text='ログインする'
        disabled={isDisabled}
        isLoading={isDisabled}
        onClick={async () => {
          setDisabled(true);
          await TwitterLogin();
        }}
      />
    </>
  );
};
