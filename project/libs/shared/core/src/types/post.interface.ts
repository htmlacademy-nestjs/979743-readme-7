import { PostStatus } from './post-status.enam';
import { PostType } from './post-type.enam';

export interface Post {
  id?: string;
  type: PostType;
  author: string;
  createDate: Date;
  lastEditDate: Date;
  postStatus: PostStatus;
  tags?: string[];
  link?: string;
  linkDescription?: string;
  photo?: string;
  videoTitle?: string;
  videoLink?: string;
  quoteText?: string;
  quoteAuthor?: string;
  textTitle?: string;
  textNotice?: string;
  textContent?: string;
}
