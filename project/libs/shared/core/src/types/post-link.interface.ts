import { PostBase } from './post-base.interface';

export interface PostLink extends PostBase {
  link: string;
  description: string; 
}