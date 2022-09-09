import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="blog">
          <div className="blog-title">Blog App</div>
          <span className="blog-desc">kết nối - chia sẻ</span>
        </div>
        <div className="menu">
          <h3>Điều hướng trang</h3>
          <ul className="menuList">
            <li className="menuItem">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="menuItem">
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li className="menuItem">
              <Link to="/write">Bài viết</Link>
            </li>
            <li className="menuItem">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="menuItem">
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Mạng Xã hội</h3>
          <div className="socialItem">
            <a
              href="https://www.facebook.com/"
              className="item"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              <span>FaceBook</span>
            </a>
          </div>
          <div className="socialItem">
            <a
              href="https://www.facebook.com/"
              className="item"
              title="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="socialItem">
            <a
              href="https://www.facebook.com/"
              className="item"
              title="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon />
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footerPowered">
        <div className="content">
          <span>Web powered by</span>
          <a href="https://github.com/" title="">
            &nbsp;nguyen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
