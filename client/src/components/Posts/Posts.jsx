import React from "react";
import "./posts.scss";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post._id}>
          <Link to={`/post/${post._id}`}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
