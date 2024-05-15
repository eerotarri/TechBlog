// import boilerplate
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// import components
import Post from "@components/Post";

// import assets
import posts from "../content/posts.json";
import { Grid } from "@mui/material";
import React from "react";

export default function Blog() {
  try {
    return (
      <main className={styles.main}>
        <Grid container maxWidth="lg" spacing={8}>
          <Grid item>
            <Link
              key={0}
              href={"/post/new"}
              style={{
                backgroundColor: "skyblue",
                padding: "30px",
                borderRadius: "5px",
                color: "black",
              }}
            >
              New post
            </Link>
          </Grid>
          {posts
            .map((post) => (
              <Grid item xs={12} md={12} lg={12} key={post.id}>
                <Post id={post.id} title={post.title} content={post.content} />
              </Grid>
            ))
            .reverse()}
        </Grid>
      </main>
    );
  } catch (error) {
    throw new Error("An error occurred, please try again later");
  }
}
