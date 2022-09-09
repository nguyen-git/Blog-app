import React from "react";
import "./post.scss";

const Post = ({ post }) => {
  return (
    <div className="post" key={post._id}>
        <div className="postImg">
          <img src={post.photo} alt="post" className="img" />
        </div>
        {post.categories.map((category) => (
          <span className="postCat" key={post._id}>
            {category.name}
          </span>
        ))}
        <h5 className="postTitle">{post.title}</h5>
        <p className="postAt">{new Date(post.createdAt).toDateString()}</p>
        <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
