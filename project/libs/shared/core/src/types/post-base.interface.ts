import { PostStatus } from './post-status.enam';

export interface PostBase {
  id?: string;
  author: string;
  createDate: Date;
  status: PostStatus;
  tags?: string[]; 
}