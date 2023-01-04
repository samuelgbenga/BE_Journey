import React from "react";
import useStyles from "./styles";
// import { useSelector } from "react-redux";
import {
  ThumbUpAlt,
  Delete,
  MoreHoriz,
  ModeComment,
} from "@mui/icons-material";
import moment from "moment";

import {
  Card,
  CardAction,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Post = ({ post }) => {
  // const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2"></Typography>
        </div>
      </Card>
    </div>
  );
};

export default Post;
