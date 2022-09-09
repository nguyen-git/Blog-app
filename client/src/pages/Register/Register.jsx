import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apiRequest.js";


const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    }
    registerUser(newUser, dispatch, navigate);   
  }


  return (
    <div className="register">
      <div className="register-left">
        <h1>Blog App</h1>
        <p>
          Blog giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </p>
      </div>
      <div className="register-right" >
        <form onSubmit={handleSubmit}>
          <h3 className="register-heading">Tạo tài khoản Blog App</h3>
          <div className="register-wrap-input">
            <input
              type="text"
              name="username"
              placeholder="Tên tài khoản..."
              required
              className="register-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="register-wrap-input">
            <input
              type="email"
              name="email"
              placeholder="Gmail..."
              required
              className="register-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-wrap-input">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              required
              className="register-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register-wrap-submit">
            <input type="submit" value="Đăng Ký" className="register-submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
