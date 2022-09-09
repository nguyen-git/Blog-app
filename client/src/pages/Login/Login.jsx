import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest.js";
import "./login.css";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   const newUser = {
    username: username,
    password: password,
  }
  loginUser(newUser, dispatch, navigate);
  };
  return (
    <div className="login">
      <div className="login-left">
        <Link to="/">
        <h1>Blog App</h1>
        </Link>
        <p>
          Blog giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </p>
      </div>
      <div className="login-right">
        <form action="" className="form-login" onSubmit={handleSubmit}>
          <div className="login-wrap-input">
            <input
              type="text"
              placeholder="Tên tài khoản..."
              required
              className="login-input"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="login-wrap-input">
            <input
              type="password"
              placeholder="Mật khẩu"
              required
              className="login-input"              
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-wrap-submit">
            <input type="submit" value="Đăng Nhập" className="login-submit"/>
          </div>
          <div className="dive"></div>
          <Link to="/register">
          <div className="register-wrap-submit">
              <input
                type="submit"
                value="Đăng Ký"
                className="register-submit"
              />
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
