import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("from post component", posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
