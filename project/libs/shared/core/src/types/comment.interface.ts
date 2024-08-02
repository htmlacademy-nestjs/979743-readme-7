export interface Comment {
  id?: string;
  publicationId: string;
  commentText: string;
  commentAuthor: string;
  createCommentDate: Date;
}
