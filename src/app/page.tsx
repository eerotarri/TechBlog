// import boilerplate
import Image from "next/image";
import styles from "./page.module.css";

// import components
import Header from "@components/Header";
import Post from "@components/Post";

// import assets
import posts from "../content/posts.json";
import { Grid } from "@mui/material";

const summa = (a: number, b: number) => {
  return a + b;
};

export default function Blog() {
  return (
    <main className={styles.main}>
      <Grid container maxWidth="lg" spacing={8}>
        {posts
          .map((post) => (
            <Grid item xs={12} md={12} lg={12}>
              <Post key={post.id} post={post} />
            </Grid>
          ))
          .reverse()}
      </Grid>
    </main>
  );
}
