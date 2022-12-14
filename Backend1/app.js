import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:kV2%40eSTjRMw%40jfA@cluster0.jtnpqrg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to db on port 5000"))
  .catch((err) => console.log(err));
