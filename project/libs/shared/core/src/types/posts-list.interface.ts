import { PostLink } from './post-link.interface';
import { PostPhoto } from './post-photo.interface';
import { PostQuote } from './post-quote.interface';
import { PostText } from './post-text.interface';
import { PostVideo } from './post-video.interface';

export interface PostCommon {
  post: PostLink | PostPhoto | PostQuote | PostText | PostVideo
}

export interface PostList {
  list: PostCommon[];
}