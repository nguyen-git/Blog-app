import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./home.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Posts from "../../components/Posts/Posts";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5050/api/posts?limit=4")
      setPosts(res.data);
    }
    fetchPosts();
  },[])
  return (
    <div className='home'>
      <Header/>
      <Banner />
      <div className="home-container">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Home