import axios from "axios";
import {
  loginFailure,
  loginSuccess,
  loginStart,
  registerStart,
  registerFailure,
  registerSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure
} from "./authSlice";

// login
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5050/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};

// register
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:5050/api/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailure());
  }
};

// create post
export const createPost = async (post, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:5050/api/posts", post);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailure());
  }
};

// logout
export const Logout = async (dispatch, id, navigate, accessToken) => {
  dispatch(logoutStart());
  try {
    await axios.post("http://localhost:5050/api/auth/logout", id, {
      headers: {token: `Bearer ${accessToken}`}
    })
    dispatch(logoutSuccess());
    navigate("/")
  } catch (error) {
    dispatch(logoutFailure());
  }
};