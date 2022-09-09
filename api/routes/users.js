import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const {password, ...others} = updateUser._doc;
      res.status(200).json({...others});
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(401)
      .json("You can't update only your account. Please try again!");
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
        const user = await User.findById(req.params.id);
        try {
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
          } catch (error) {
            res.status(500).json(error);
          }
    } catch (error) {
        res.status(404).json("User not found");
    }
    
  } else {
    res
      .status(401)
      .json("You can't delete only your account. Please try again!");
  }
});

// Get user 
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});



export default router;
