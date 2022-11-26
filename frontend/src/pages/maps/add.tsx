/* eslint "react/display-name": "off" */

import { Header } from 'components';
import { MapSubmitForm } from 'components/organisms/MapSubmitForm';
import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export default () => {
  if (isMobile) {
    return (
      <>
        <Header />
        <h1>スマホでは編集機能を利用できません🙇‍♂️</h1>
      </>
    );
  }

  const Wrapper = styled.div`
    height: 100vh;
  `;
  return (
    <Wrapper>
      <Header />
      <MapSubmitForm />
    </Wrapper>
  );
};
