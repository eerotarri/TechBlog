// import boilerplate
import { Paper, Typography, Grid, Divider } from "@mui/material";
import { getServerSession } from "next-auth/next";

// import components
import Post from "@/components/Post";
import Comment from "@/components/Comment";

// import styles
import styles from "./page.module.css";

// import assets
import posts from "@/content/posts.json";
import comments from "@/content/comments.json";
import { options } from "@auth/options";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const session = await getServerSession(options); // TODO: use this to redirect to login if not logged in when trying to comment

  const postComments = comments.filter((c) => c.postId === params.id);
  console.log(postComments);

  return (
    <main className={styles.main}>
      <Post post={posts.find((p) => p.id === params.id)!}></Post>
      <Divider variant="fullWidth" style={{ margin: "20px 0" }}></Divider>
      {postComments.length !== 0 && (
        <Paper style={{ padding: "40px 20px", width: "100%" }}>
          {postComments.reverse().map((comment, index) => (
            <>
              {index !== 0 && (
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              )}
              <Comment key={comment.id} {...comment}></Comment>
            </>
          ))}
        </Paper>
      )}
    </main>
  );
}
