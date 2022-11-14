/* eslint "react/display-name": "off" */

import { Header } from 'components';
import { MapSubmitForm } from 'components/organisms/MapSubmitForm';
import React from 'react';
import styled from 'styled-components';

export default () => {
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
