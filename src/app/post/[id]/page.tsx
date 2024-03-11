// import boilerplate
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import styles from "./page.module.css";
import Post from "@/components/Post";

import posts from "@/content/posts.json";

// import components

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <Post post={posts.find((p) => p.id === params.id)!}></Post>
    </main>
  );
}
