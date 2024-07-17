import { PostBase } from './post-base.interface';

export interface PostVideo extends PostBase {
  title: string;
  link: string;
}