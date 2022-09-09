import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import "./singlepost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [likePost, setLikePost] = useState(true);



  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5050/api/posts/${path}`);
      setPost(res.data);
      console.log(res.data);
    };
    getPost();
  }, [path]);

  const handleSave = () => {
    setLikePost(!likePost);
  };
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img src={post.photo} alt="" className="single-post-img" />
        <h1 className="single-post-title">
          {post.title}
          <div className="single-post-edit" onClick={handleSave}>
            {likePost ? <ThumbUpOffAltIcon className="single-post-icon"/> : <ThumbUpAltIcon className="single-post-icon"/>}
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>{post.username}</b>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
