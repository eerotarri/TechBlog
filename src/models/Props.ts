export interface PostProps {
  id: string;
  title: string;
  content: string;
  author?: string;
  timestamp?: string;
}

export interface CommentProps {
  postId: string;
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface CreateCommentProps {
  postId: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface NewCommentProps {
  postId: string;
}

export interface GetImageProps {
  imageId: string;
}
