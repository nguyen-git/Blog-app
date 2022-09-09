import React from "react";
import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SinglePost from "../../components/SinglePost/SinglePost";

const Single = () => {
  return (
    <div className="single">
      <Header />
      <div className="single-body">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default Single;
