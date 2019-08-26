import React from 'react';


function Post(props) {
  const {Post} = props;
  const body = <section>{Post.text}</section>
  return (
    <div>
      <h2>{Post.title}</h2>
      {body}
      <h3>creation date: {(new Date()).toDateString()}</h3>
    </div>
  )
}

export default Post;