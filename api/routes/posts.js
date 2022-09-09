import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all post
router.get("/", async (req, res) => {
  const username = req.query.user;
  const categoriesName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoriesName) {
      posts = await Post.find({
        categories: {
          $in: [categoriesName],
        },
      });
    } else {
      posts = await Post.find().limit(req.query.limit);
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});




export default router;
