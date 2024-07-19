import { PostStatus } from '@project/core';
import { Expose } from 'class-transformer';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class PublicationRdo {
  @Expose()
  public id: string;

  @Expose()
  public type: PostType;

  @Expose()
  public author: string;

  @Expose()
  public createDate: Date;

  @Expose()
  public lastEditDate: Date;

  @Expose()
  public postStatus: PostStatus;

  @Expose()
  public tags: string[] | [];

  @Expose()
  public link: string | '';

  @Expose()
  public linkDescription: string | '';

  @Expose()
  public photo: string | '';

  @Expose()
  public videoTitle: string | '';

  @Expose()
  public videoLink: string | '';

  @Expose()
  public quoteText: string | '';

  @Expose()
  public quoteAuthor: string | '';

  @Expose()
  public textTitle: string | '';

  @Expose()
  public textNotice: string | '';

  @Expose()
  public textContent: string | '';
}
