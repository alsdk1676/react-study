import React, { use, Suspense, useEffect, useState } from 'react';
import getPosts from '../_function/getPosts';
import { Link } from 'react-router-dom';

const PostContainer = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts((post) => posts.slice(0, 10))
      .then(setPosts)
      .catch(console.error)
  }, [])

  getPosts().then(console.log)

  return (
    <div>
      {posts.map((post, i) => {
        <Link to={'/post/${id}'}><li key={i}>{post.title}</li></Link>
      })}
    </div>
  );
};
// zzz

export default PostContainer;










// sdsldf