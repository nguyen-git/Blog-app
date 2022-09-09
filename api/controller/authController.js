import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
let arrayRefreshTokens = [];
const authController = {
  // register
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      };
      const newUser = new User(user);
      await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Generate access token
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1h" }
    );
  },

  // Generate refresh token
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: "1d" }
    );
  },

  // login

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("Incorrect username or password");
      }
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validatePassword) {
        return res.status(404).json("Incorrect username or password");
      }

      if (user && validatePassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);
        arrayRefreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        })

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  requestRefreshToken: async (req, res) => {
    // take request token from user
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.status(401).json("you must be logged in")
    if(!arrayRefreshTokens.includes(refreshToken)){
      return res.status(403).json("refresh token is not valid")
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (error, user) => {
      if(error){
        console.log(error);
      }
      arrayRefreshTokens.filter((token)=> token !== refreshToken)
      // create a new access token
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      arrayRefreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({accessToken: newAccessToken});
    })
  },

  // user logout
  userLogout: async(req, res) => {
    // res.clearCookie("refreshToken");
    // arrayRefreshTokens = arrayRefreshTokens.filter((token) => token !== req.cookie.refreshToken);
    res.status(200).json("logged out successfully");
  },
};

export default authController;
