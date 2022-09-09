import React, { useContext, useState } from "react";
import "./userSideBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../Context/darkModeContext";

const UserSideBar = () => {
  const [mode, setMode] = useState(true);

  const { dispatch } = useContext(DarkModeContext);

  const handleMode = () => {
    setMode(!mode);
  };
  return (
    <div className="userSideBar">
      <div className="container">
        <div className="title">
          <h3>Cài đặt</h3>
        </div>
        <div className="content">
          <ul>
            <Link to="/user">
              <li>
                <PersonIcon />
                Tài khoản
              </li>
            </Link>
            <Link to="/user/post">
              <li>
                <LibraryBooksIcon />
                Bài viết
              </li>
            </Link>
            <Link to="">
              <li>
                <BookmarksIcon />
                Lưu bài
              </li>
            </Link>
            <Link to="" onClick={handleMode}>
              {mode ? (
                <li>
                  <DarkModeIcon  onClick={() => dispatch({ type: "DARK" })}/>
                  Chế độ
                </li>
              ) : (
                <li>
                  <LightModeIcon  onClick={() => dispatch({ type: "LIGHT" })}/>
                  Chế độ
                </li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
