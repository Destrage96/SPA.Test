import React from 'react';
import Post from '../Post/Post';
import styled from 'styled-components';

const LiStyle = styled.li`
  list-style: none;
`;

export default function PostNews({ PostList }) {
  
  const PostElements = PostList.map(PostList =>
    <LiStyle key = {PostList.id}><Post Post = {PostList}/></LiStyle>
  )
  
  return (
    <ul>
      {PostElements}
    </ul>
  )
}