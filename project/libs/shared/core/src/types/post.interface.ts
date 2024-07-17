import { PostStatus } from './post-status.enam';

export interface Post {
  id?: string;
  author: string;
  createDate: Date;
  status: PostStatus;
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