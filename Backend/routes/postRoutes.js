import express from "express"
import { createPost ,deletePost,getPostOfFollowing,likeAndUnlikePost, updateCaption} from "../controllers/postController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// http://localhost:6000/ap1/v1/post/upload
router.post("/post/upload", isAuthenticated, createPost)
router.get("/post/:id", isAuthenticated, likeAndUnlikePost)
router.delete("/post/:id", isAuthenticated, deletePost)
router.get("/post", isAuthenticated, getPostOfFollowing)
router.put("post/:id",isAuthenticated,updateCaption)


export default router