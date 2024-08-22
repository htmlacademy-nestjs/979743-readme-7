import { Entity, StorableEntity, Comment } from '@project/core';

export class CommentEntity extends Entity implements StorableEntity<Comment> {
  public publicationId: string;
  public commentText: string;
  public commentAuthorId: string;
  public createCommentDate: Date;

  constructor(comment?: Comment) {
    super();
    this.population(comment);
  }

  public population(comment?: Comment): void {
    if (!comment) {
      return;
    }
    this.id = comment.id ?? '';
    this.commentText = comment.commentText;
    this.commentAuthorId = comment.commentAuthorId;
    this.createCommentDate = comment.createCommentDate;
    this.publicationId = comment.publicationId;
  }
  public toPOJO(): Comment {
    return {
      id: this.id,
      commentText: this.commentText,
      commentAuthorId: this.commentAuthorId,
      createCommentDate: this.createCommentDate,
      publicationId: this.publicationId,
    };
  }
}
