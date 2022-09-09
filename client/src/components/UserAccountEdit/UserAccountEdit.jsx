import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userAccountEdit.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import avatar from "../../asset/img/avatar.jpg";
import UserAccount from "../UserAccount/UserAccount";

const UserAccountEdit = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [career, setCareer] = useState(user.career);
  const [image, setImage] = useState(user.profilePic);
  const [openUserAccount, setOpenUserAccount] = useState(false);

  const userId = user._id;
  const userName = user.username;
  const navigate = useNavigate();
  console.log(image);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      email: email,
      gender: gender,
      age: age,
      career: career,
    };
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dzg58cl9p/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newUser = {
        ...updatedUser,
        userId,
        userName,
        profilePic: url,
      };
      await axios.put(`http://localhost:5050/api/users/${userId}`, newUser);
      navigate("/user");
      alert("Cập nhật thông tin người dùng thành công");
      setOpenUserAccount(!openUserAccount);
    } catch (error) {
      console.log(error);
      alert("Vui lòng cập nhật lại sau!");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setOpenUserAccount(!openUserAccount);
  };

  return (
    <div className="userAccountEdit">
      {openUserAccount ? (
        <UserAccount />
      ) : (
        <div className="userAccountContainer">
          <div className="editInfo">
            <div className="head">
              <h5>Thông tin tài khoản</h5>
            </div>
            <form>
              <div className="formUserName">
                <div>Tên tài khoản: </div>
                <div className="userName">{userName}</div>
              </div>
              <div className="form">
                <label htmlFor="gender">Email:</label>
                <input
                  autoFocus
                  type="email"
                  id="gender"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="head">
                <h5>Thông tin cá nhân</h5>
              </div>
              <div className="form">
                <label htmlFor="email">Giới tính:</label>
                <input
                  type="text"
                  id="email"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="form">
                <label htmlFor="age">Tuổi:</label>
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form">
                <label htmlFor="career">Nghề nghiệp:</label>
                <input
                  type="text"
                  id="career"
                  value={career}
                  onChange={(e) => setCareer(e.target.value)}
                />
              </div>
              <div className="formBtn">
                <button
                  className="cancelBtn"
                  type="submit"
                  onClick={handleCancel}
                >
                  Hủy
                </button>
                <button
                  className="updateBtn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
          <div className="editImage">
            {user.profilePic ? (
              <img src={image} alt="anh" className="img" />
            ) : (
              <img
                src={image ? URL.createObjectURL(image) : avatar}
                alt="anh"
                className="img"
              />
            )}
            <label htmlFor="fileInput">
              <AddIcon className="icon" />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccountEdit;
