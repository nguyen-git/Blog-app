import React from "react";
import "./user.scss";
import UserAccount from "../../components/UserAccount/UserAccount.jsx";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.jsx";
import UserSideBar from "../../components/UserSideBar/UserSideBar.jsx";


const User = () => {
  return (
    <div className="user">
      <Header />
      <div className="userContainer">
        <UserSideBar />
        <UserAccount />
      </div>
      <Footer />
    </div>
  );
};

export default User;
