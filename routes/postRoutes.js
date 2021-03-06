import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import * as postController from "../controllers/postController.js";

const router = express.Router();

router.post("/create", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);
router.get("/", authMiddleware, postController.getAllPosts);
router.get("/:id", authMiddleware, postController.getPost);
router.put("/like/:id", authMiddleware, postController.like);
router.get("/timeline/post", authMiddleware, postController.getTimeLinePost);
router.put("/:id/save", authMiddleware, postController.savePost);
router.get("/saved/posts", authMiddleware, postController.getSavedPosts);

export default router;
