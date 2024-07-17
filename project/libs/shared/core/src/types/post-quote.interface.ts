import { PostBase } from './post-base.interface';

export interface PostQuote extends PostBase {
  quoteText: string;
  quoteAuthor: string;
}