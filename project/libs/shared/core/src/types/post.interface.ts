import { PostStatus } from './post-status.enam';
import { PostType } from './post-type.enam';
import { Comment } from './comment.interface';

export interface Post {
  id?: string;
  originalID?: string;
  type: PostType;
  authorID: string;
  originalAuthorID?: string;
  createDate: Date;
  lastEditDate: Date;
  postStatus: PostStatus;
  isReposted: boolean;
  likesCount: number;
  commentsCount: number;
  tags?: string;
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
  comments: Comment[];
}
