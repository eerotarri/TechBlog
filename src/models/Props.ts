export interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
  };
}

export interface CommentProps {
  postId: string;
  id: string;
  author: string;
  content: string;
  timestamp: string;
}
