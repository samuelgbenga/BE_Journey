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
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Post = ({ post, setCurrentId }) => {
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
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHoriz fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag}`)}
          </Typography>
        </div>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAlt fontSize="small" />
            like
            {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <Delete fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
