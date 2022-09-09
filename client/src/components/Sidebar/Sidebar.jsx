import React from "react";
import "./sidebar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import avatar from "../../asset/img/avatar.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarTitle">About Blog</div>
      <div className="content">
        <img src={avatar} alt="" className="img" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          deleniti fugit architecto consequatur earum autem modi numquam rem qui
          natus tenetur cupiditate cumque eius animi, quae aliquid unde vero
          doloribus velit eveniet? Sunt.
        </p>

        <div className="content-detail">
          <div className="favorite">
            <span className="favorite-title">Categories</span>
            <ul className="favorite-list">
              <li className="favorite-item">Life</li>
              <li className="favorite-item">Music</li>
              <li className="favorite-item">Style</li>
              <li className="favorite-item">Sport</li>
              <li className="favorite-item">Tech</li>
              <li className="favorite-item">Cinema</li>
            </ul>
          </div>
          <div className="follow">
            <span className="favorite-title">Follow Us</span>
            <a href="https://www.facebook.com/">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon className="icon" />
            </a>
            <a href="https://www.facebook.com/">
              <EmailIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
