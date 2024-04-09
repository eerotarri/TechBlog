"use client";

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HTMLBlock from "@components/HTMLBlock";
import {
  BlockType,
  ContentProps,
  HTMLBlockProps,
  TextBlockProps,
  blockTypes,
} from "@/models/Props";
import ImageInput from "./_components/ImageInput";
import TextInput from "./_components/TextInput";
import TitleField from "./_components/TitleField";
import BlockSelector from "./_components/BlockSelector";

function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<ContentProps>({});
  const [blockCount, setBlockCount] = useState<number>(0);
  const [blockType, setBlockType] = useState<BlockType>(blockTypes[0]);

  const handlePost = () => {
    const contentString = Object.values(content).join("<br>");

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

    // name === "title"
    //   ? setTitle(value)
    //   : setContent({
    //       ...content,
    //       [name]: `<${blockType}>${value}<${blockType}>`,
    //     });

    console.log(title, content);
  };

  function handleNewBlock() {
    setBlockCount(blockCount + 1);
    if (blockType === "img") {
      setContent({
        ...content,
        [`block${blockCount}`]: {
          id: `block${blockCount}`,
          src: "image1.png",
          alt: "",
        },
      });
    } else {
      setContent({
        ...content,
        [`block${blockCount}`]: { blockType: blockType, value: "" },
      });
    }

    console.log(content);
  }

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <TitleField handleChange={handleChange} />
      {Object.keys(content).map((key) => (
        <TextInput
          key={key}
          name={key}
          handleChange={handleChange}
          content={content[key] as TextBlockProps}
        />
      ))}
      <BlockSelector
        blockType={blockType}
        setBlockType={setBlockType}
        blockTypes={blockTypes}
      />
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
