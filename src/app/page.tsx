// import boilerplate
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// import components
import Post from "@components/Post";

// import assets
import posts from "../content/posts.json";
import { Grid } from "@mui/material";

export default function Blog() {
  return (
    <main className={styles.main}>
      <Grid container maxWidth="lg" spacing={8}>
        <Grid item>
          <Link
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
            <Grid item xs={12} md={12} lg={12}>
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
              />
            </Grid>
          ))
          .reverse()}
      </Grid>
    </main>
  );
}
