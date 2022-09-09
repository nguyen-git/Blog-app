import React, { useState } from "react";
import "./userAccount.scss";
import "../Context/darkMode.scss";
import { useSelector } from "react-redux";
import UserAccountEdit from "../UserAccountEdit/UserAccountEdit";
import avatar from "../../asset/img/avatar.jpg";


const UserAccount = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [open, setOpen] = useState(false);

  const handleEditUser = () => {
    setOpen(!open);
  };
  return (
    <div className="userAccount">
      {open ? (
        <UserAccountEdit />
      ) : (
        <div className="userAccountContainer">
          <div className="userInfo">
            <div className="userAccountInfo">
              <div className="userAccountHead">
                <h5 className="title">Thông tin tài khoản</h5>
              </div>
              <div className="userAccountForm">
                <div>
                  <b>Tên tài khoản:</b> 
                </div>
                <div>{user.username}</div>
              </div>
              <div className="userAccountForm">
                <div>
                  <b>Email:</b> 
                </div>
                <div>{user.email || "chưa được cập nhật"}</div>
              </div>
              <div className="userAccountForm">
                <div>
                  <b>Tạo:</b>
                </div>
                <div>{new Date(user.createdAt).toDateString()}</div>
              </div>
              <div className="userAccountHead">
                <h5 className="title">Thông tin cá nhân</h5>
              </div>
              <div className="userAccountForm">
                <div>
                  <b>Giới tính:</b>
                </div>
                <div>{user.gender || "chưa cập nhật"}</div>
              </div>
              <div className="userAccountForm">
                <div>
                  <b>Tuổi:</b>
                </div>
                <div>{user.age || "chưa được cập nhật"}</div>
              </div>
              <div className="userAccountForm">
                <div>
                  <div></div>
                  <b>Nghề nghiệp:</b> 
                </div>
                <div>{user.career || "chưa được cập nhật"}</div>
              </div>
              <div className="userAccountForm">
                <button className="updateBtn" onClick={handleEditUser}>
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>
          <div className="userImage">
            <img alt="user account" src={avatar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
