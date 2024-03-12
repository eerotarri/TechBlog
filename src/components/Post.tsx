import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { PostProps } from "@/models/Props";

export default function Post({ post }: PostProps) {
  return (
    <CardActionArea component="a" href={`/post/${post.id}`}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>

          <Typography display="block" color="primary">
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
