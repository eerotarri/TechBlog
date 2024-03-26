// import boilerplate
import { Paper, Typography, Grid, Divider } from "@mui/material";
import { getServerSession } from "next-auth/next";

// import components
import Post from "@/components/Post";
import Comment from "@/components/Comment";
import NewComment from "@components/NewComment";

// import styles
import styles from "./page.module.css";

// import assets
import posts from "@/content/posts.json";
import comments from "@/content/comments.json";
import { options } from "@auth/options";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const postComments = comments.filter((c) => c.postId === params.id);

  const { id, title, content } = posts.find((p) => p.id === params.id)!;

  return (
    <main className={styles.main}>
      <Post id={id} title={title} content={content}></Post>
      <Divider variant="fullWidth" style={{ margin: "20px 0" }}></Divider>
      <Paper style={{ padding: "40px 20px", width: "100%" }}>
        <NewComment postId={params.id} />

        {postComments.length !== 0 && (
          <>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            {postComments.reverse().map((comment, index) => (
              <>
                {index !== 0 && (
                  <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                )}
                <Comment key={comment.id} {...comment}></Comment>
              </>
            ))}
          </>
        )}
      </Paper>
    </main>
  );
}
