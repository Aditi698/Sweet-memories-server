import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletepost,
  likepost,
  getPost,
} from "../controller/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/getposts", getPosts);
router.get("/:id", getPost);
router.post("/createpost", auth, createPost);
router.post("/updatepost/:id", auth, updatePost);
router.delete("/deletepost/:id", auth, deletepost);
router.post("/likepost/:id", auth, likepost);

export default router;
