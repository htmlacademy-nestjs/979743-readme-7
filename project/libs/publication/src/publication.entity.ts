import { Entity, StorableEntity, Post, PostStatus } from '@project/core';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class PublicationEntity extends Entity implements StorableEntity<Post> {
  // public type: PostType;
  public type: string;
  public author: string;
  public createDate: Date;
  public lastEditDate: Date;
  public postStatus: PostStatus;
  public isReposted: boolean;
  public likesCount: number;
  public commentsCount: number;
  public tags?: string | null;
  public link: string;
  public linkDescription: string;
  public photo: string;
  public videoTitle: string;
  public videoLink: string;
  public quoteText: string;
  public quoteAuthor: string;
  public textTitle: string;
  public textNotice: string;
  public textContent: string;

  constructor(publication?: Post) {
    super();
    this.populate(publication);
  }

  public populate(publication?: Post): void {
    if (!publication) {
      return;
    }

    this.id = publication.id ?? '';
    this.type = publication.type;
    this.author = publication.author;
    this.createDate = publication.createDate;
    this.lastEditDate = publication.lastEditDate;
    this.postStatus = publication.postStatus;
    this.isReposted = publication.isReposted;
    this.likesCount = publication.likesCount;
    this.commentsCount = publication.commentsCount;
    this.tags = publication.tags ?? null;
    this.link = publication.link;
    this.linkDescription = publication.linkDescription;
    this.photo = publication.photo;
    this.videoTitle = publication.videoTitle;
    this.videoLink = publication.videoLink;
    this.quoteText = publication.quoteText;
    this.quoteAuthor = publication.quoteAuthor;
    this.textTitle = publication.textTitle;
    this.textNotice = publication.textNotice;
    this.textContent = publication.textContent;
  }

  public toPOJO(): Post {
    return {
      id: this.id,
      type: this.type,
      author: this.author,
      createDate: this.createDate,
      lastEditDate: this.lastEditDate,
      postStatus: this.postStatus,
      isReposted: this.isReposted,
      likesCount: this.likesCount,
      commentsCount: this.commentsCount,
      tags: this.tags,
      link: this.link,
      linkDescription: this.linkDescription,
      photo: this.photo,
      videoTitle: this.videoTitle,
      videoLink: this.videoLink,
      quoteText: this.quoteText,
      quoteAuthor: this.quoteAuthor,
      textTitle: this.textTitle,
      textNotice: this.textNotice,
      textContent: this.textContent,
    };
  }
}
