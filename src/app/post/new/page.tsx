"use client";

import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import HTMLBlock from "@components/HTMLBlock";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});
  const [blockCount, setBlockCount] = useState(0);

  const handlePost = () => {
    const contentString = Object.values(content).join("");

    console.log(contentString);

    const newPost = {
      title,
      content: contentString,
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
    const { name, value } = e.target;

    name === "title"
      ? setTitle(value)
      : setContent({
          ...content,
          [name]: value,
        });

    console.log(title, content);
  };

  function handleNewBlock() {
    setBlockCount(blockCount + 1);
    setContent({ ...content, [`block${blockCount}`]: "" });
  }

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <TextField
        key={-1}
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
      {Object.keys(content).map((key) => (
        <HTMLBlock key={key} name={key} handleChange={handleChange} />
      ))}
      <Button
        onClick={handleNewBlock}
        variant="contained"
        sx={{ marginRight: "10px" }}
      >
        New Block
      </Button>
      <Button onClick={handlePost} variant="contained">
        Post
      </Button>
    </Container>
  );
}

export default NewPost;
