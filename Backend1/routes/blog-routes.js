import express from "express";
import {
  addBlog,
  deletBlog,
  getAllBlog,
  getById,
  getByUserId,
  updateBlog,
} from "../controllers/blog-controllers";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlog);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deletBlog);
blogRouter.get("/user/:id", getByUserId);

export default blogRouter;
