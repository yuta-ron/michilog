import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const OldExample = () => {
  // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview
  // Set an oEmbed query parameter of hide_thread=true or add a data-conversation="none" attribute to the resulting <blockquote> element to prevent the display of a parent Tweet.

  // https://github.com/saurabhnemade/react-twitter-embed/pull/107/files
  const options = {
    hide_thread: false,
    conversation: 'none'
  };

  return (
    <div className='w-3/4 mx-auto'>
      <div className='grid gap-10 grid-cols-1 lg:grid-cols-3'>
        <TwitterTweetEmbed tweetId={'1566388968546975744'} options={options} />
        <TwitterTweetEmbed tweetId={'1439594018090803214'} options={options} />
        <TwitterTweetEmbed tweetId={'1578346332569317376'} options={options} />
      </div>
    </div>
  );
};
