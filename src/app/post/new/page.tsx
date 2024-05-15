"use client";

import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import {
  BlockType,
  ContentProps,
  HTMLBlockProps,
  TextBlockProps,
  blockTypes,
} from "@/models/Props";
import TextInput from "./_components/TextInput";
import TitleField from "./_components/TitleField";
import BlockSelector from "./_components/BlockSelector";
import { sanitize } from "@/lib/utils";
import ImageInput from "./_components/ImageInput";

function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<ContentProps>({});
  const [image, setImage] = useState<File | undefined>();
  const [blockCount, setBlockCount] = useState<number>(0);
  const [blockType, setBlockType] = useState<BlockType>(blockTypes[0]);

  const handlePost = async () => {
    const contentString = Object.values(content)
      .map((block) => {
        if ("blockType" in block) {
          return `<${block.blockType}>
          ${sanitize(block.value)}
          </${block.blockType}>`;
        } else {
          return block;
        }
      })
      .join("<br>");

    const newPost = {
      title,
      content: contentString,
      timestamp: new Date().toISOString(),
    };

    const postId = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => data.id);

    if (image) {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("id", postId.toString());
      fetch("/api/images", {
        method: "POST",
        body: formData,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    name === "title"
      ? setTitle(value)
      : setContent({
          ...content,
          [name]: { ...content[name], value },
        });

    console.log(name, value);
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    file: File
  ) => {
    if (file) {
      setImage(file);
    }
  };

  function handleNewBlock() {
    console.log(content);
    setBlockCount(blockCount + 1);
    if (blockType === "img") {
      setContent({
        ...content,
        [`block${blockCount}`]: {
          id: `block${blockCount}`,
          alt: "image",
        },
      });
    } else {
      setContent({
        ...content,
        [`block${blockCount}`]: { blockType: blockType, value: "" },
      });
    }
  }

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <TitleField handleChange={handleChange} />
      <ImageInput handleChange={handleImageChange} />
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
