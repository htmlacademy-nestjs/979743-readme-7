import { PostBase } from './post.interface';

export interface PostVideo extends PostBase {
  title: string;
  link: string;
}