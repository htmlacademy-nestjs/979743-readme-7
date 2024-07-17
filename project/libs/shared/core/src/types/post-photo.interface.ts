import { PostBase } from './post-base.interface';

export interface PostPhoto extends PostBase {
  photo: string;
}