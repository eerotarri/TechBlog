"use client";

import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("Post");

    const newPost = {
      title,
      content,
      timestamp: new Date().toISOString(),
    };

    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setContent(e.target.value);

    console.log(title, content);
  };

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <TextField
        name="title"
        label="Title"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        style={{
          backgroundColor: "aliceblue",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      ></TextField>
      <TextField
        name="content"
        label="Post as HTML"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={20}
        style={{
          backgroundColor: "aliceblue",
          borderRadius: "4px",
        }}
      ></TextField>
      <Button
        onClick={handlePost}
        variant="contained"
        sx={{ marginTop: "10px" }}
      >
        Post
      </Button>
    </Container>
  );
}

export default NewPost;
