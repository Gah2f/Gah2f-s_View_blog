import express from "express";
import { addBlog } from "../Controllers/blogController.js";
import upload from "../Middlewares/multer.js";
import auth from "../Middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);

export default blogRouter;
