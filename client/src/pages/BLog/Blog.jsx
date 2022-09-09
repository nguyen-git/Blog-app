import React, { useState, useEffect } from "react";
import "./blog.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Search from "../../components/Search/Search";
import EmptyList from "../../components/EmptyList/EmptyList";

const category = ["All", "Developer", "Design", "Financial", "Entertainment"];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("All");

  // filter
  const handleFilter = (categories) => {
    setType(categories);
    handleFilterResult(categories);
  };

  // filter posts
  const handleFilterResult = (categories) => {
    const allPosts = posts;
    const filterPosts = allPosts.filter((post) =>
      post.categories.includes(categories.toLowerCase())
    );

    setPosts(filterPosts);
  };

  // search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // search posts
  const handleSearchResults = () => {
    const allPosts = posts;
    const searchPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchKey)
    );

    setPosts(searchPosts);
  };

  // clear search
  const handleClearSearch = () => {
    setSearchKey("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          type
            ? `http://localhost:5050/api/posts?category=${type}`
            : `http://localhost:5050/api/posts`
        );
        setPosts(res.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchPosts();
  }, [searchKey, type]);
  return (
    <div className="blog">
      <Header />
      <Search
        value={searchKey}
        formSubmit={handleSearchSubmit}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <div className="filterPost">
        <ul>
          {category.map((categories) => (
            <li
              key={categories}
              value={type}
              style={
                categories === type
                  ? { color: "#000", backgroundColor: "#ddd" }
                  : { color: "#5e5e5e" }
              }
              onClick={() => handleFilter(categories)}
            >
              {categories}
            </li>
          ))}
        </ul>
      </div>
      <div className="blogContainer">
        {!posts.length ? <EmptyList /> : <Posts posts={posts} />}
      </div>
    </div>
  );
};

export default Blog;
