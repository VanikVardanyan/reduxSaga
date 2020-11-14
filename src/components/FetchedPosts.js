import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedPosts } from '../store/action';
import { Loader } from './loader';
import Post from './Post';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchedPosts())}
      >
        download
      </button>
    );
  }

  return posts.map((post) => <Post post={post} key={post.id} />);
};
