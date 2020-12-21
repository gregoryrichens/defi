import React from 'react';
import styled from 'styled-components';
import NewsStoriesItem from './NewsStoriesItem.jsx';

const Stories = styled.div`
  display: block;
  width: 33%;
`;

function NewsStories() {
  return (
    <Stories>
      <NewsStoriesItem />
      <NewsStoriesItem />
      <NewsStoriesItem />
    </Stories>
  );
};

export default NewsStories;