import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogId,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../Controllers/blogController.js";
import upload from "../Middlewares/multer.js";
import auth from "../Middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogId);
blogRouter.post("toggle-publish", auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.get('comments', getBlogComments)

export default blogRouter;
