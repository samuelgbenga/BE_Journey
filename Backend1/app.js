import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();

app.use("/api/user", router);
mongoose
  .connect(
    "mongodb+srv://admin:kV2%40eSTjRMw%40jfA@cluster0.jtnpqrg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to db on port 5000"))
  .catch((err) => console.log(err));
