import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

class Document extends NextDocument<Props> {
  render () {
    return (
      <Html lang='ja'>
        <Head />
        <body className='relative max-w-screen-2xl l h-full mx-auto mt-5 mb-96'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
