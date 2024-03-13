"use client";

import {
  CommentProps,
  NewCommentProps,
  CreateCommentProps,
} from "@/models/Props";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { getClientSession } from "@lib/utils";
import { generateCommentId } from "@lib/utils";

function NewComment({ postId }: NewCommentProps) {
  const session = getClientSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    session.then((session) => {
      if (!session?.user) {
        router.push("/api/auth/signin?callbackUrl=/post/" + postId);
      }
    });

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    session.then((session) => {
      const newComment: CreateCommentProps = {
        postId,
        author: session?.user?.name as string,
        content: formData.content,
        timestamp: new Date().toISOString(),
      };

      fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      console.log(newComment);
    });
  };

  return (
    <Box>
      <Typography variant="h4">New Comment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="content"
          placeholder="Comment"
          value={formData.content}
          onChange={handleChange}
          fullWidth
          multiline
          inputProps={{ maxLength: 1024 }}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default NewComment;
