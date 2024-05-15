export interface PostProps {
  id: string;
  title: string;
  content: string;
  image?: string;
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

export interface UserProps {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  password?: string;
  salt?: string;
}

export const blockTypes = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];

type AllowedBlockTypes<T extends string[]> = T[number];
export type BlockType = AllowedBlockTypes<typeof blockTypes>;

export type ImageProps = {
  id: string;
  src?: string;
  image?: File;
  alt?: string;
};

export type TextBlockProps = {
  blockType: BlockType;
  value: string;
};

export type HTMLBlockProps = ImageProps | TextBlockProps;

export type ContentProps = Record<string, HTMLBlockProps>;
