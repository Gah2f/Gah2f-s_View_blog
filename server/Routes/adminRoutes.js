import express from "express";
import {
  adminLogin,
  approveCommentByID,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashBoard,
} from "../Controllers/adminController.js";
import auth from "../Middlewares/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentByID);
adminRouter.get("/dashboard", auth, getDashBoard);

export default adminRouter;
