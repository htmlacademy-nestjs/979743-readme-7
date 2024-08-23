export interface Comment {
  id?: string;
  publicationId: string;
  commentText: string;
  commentAuthorId: string;
  createCommentDate: Date;
}
