import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public publicationId: string;

  @Expose()
  public commentText: string;

  @Expose()
  public commentAuthor: string;

  @Expose()
  public createCommentDate: Date;
}
