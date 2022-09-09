import React, {useEffect, useState} from 'react';
import "./userPost.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import Posts from "../../components/Posts/Posts.jsx";
import EmptyList from '../EmptyList/EmptyList';

const UserPost = () => {
    const [posts, setPosts] = useState([]);
    const user = useSelector((state) => state.auth.login.currentUser);
    const username = user.username;

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get(`http://localhost:5050/api/posts/${username}`, username)
          setPosts(res.data)
        }
        fetchPosts();
      },[username])
  return (
    <div className="userAccountPost">
        <div className="userPostContainer">
        {!posts ? <EmptyList /> : <Posts posts={posts}/>}
        </div>
    </div>
  )
}

export default UserPost