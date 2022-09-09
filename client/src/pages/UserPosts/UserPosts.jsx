import React from 'react';
import "./userPosts.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from '../../components/Footer/Footer';
import UserSideBar from "../../components/UserSideBar/UserSideBar.jsx";
import UserPost from '../../components/UserPost/UserPost';

const UserPosts = () => {
  return (
    <div className='userPost'>
        <Header />
        <div className="userPostsContainer">
            <UserSideBar />
            <UserPost />
        </div>
        <Footer />
    </div>
  )
}

export default UserPosts