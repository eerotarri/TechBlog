import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

// import interfaces
import { CommentProps } from "@/models/Props";

// import utils
import { getTimeDifference } from "@lib/utils";

function Comment({ author, content, timestamp }: CommentProps) {
  const postedAgo = getTimeDifference(timestamp);

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h4" style={{ margin: 0, textAlign: "left" }}>
            {author}
          </Typography>
          <Typography style={{ textAlign: "left" }}>{content}</Typography>
          <Typography style={{ textAlign: "left", color: "gray" }}>
            {postedAgo}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Comment;
