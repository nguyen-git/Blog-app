import React, { useEffect, useState } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import {Logout} from "../../redux/apiRequest.js";
const Header = () => {
  const [header, setHeader] = useState(false);

  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const userId = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleLogout = () => {
    Logout(dispatch,navigate, accessToken, userId);
  }

  return (
    <div className={header ? "header active" : "header"}>
      <div className="topLeft">
        <Link to="/">
          <h2>PN</h2>
        </Link>
      </div>
      <div className="topCenter">
        <div>
          <ul className="topList">
            <li className="listItem">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="listItem">
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li className="listItem">
              <Link to="/write">Bài viết</Link>
            </li>
            <li className="listItem">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="listItem">
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <div className="userHeader">
            <p>
              Xin Chào! <span>{user.username}</span>
            </p>
            <div className="userHeaderSetting">
              <ul>
                <li>
                  <Link to="/user">
                    <p style={{ marginRight: "20px" }}>
                      <ManageAccountsIcon />
                      Tài khoản
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    <p style={{ marginRight: "20px" }}>
                      <LogoutIcon />
                      Đăng xuất
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <p style={{ marginRight: "20px" }}>Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
