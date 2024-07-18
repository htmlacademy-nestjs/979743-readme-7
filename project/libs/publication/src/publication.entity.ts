import { Entity, StorableEntity, Post, PostStatus } from '@project/core'

export class PublicationEntity extends Entity implements StorableEntity<Post> {
  public author: string;
  public createDate: Date;
  public status: PostStatus;
  public tags: string[]; 
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
    if (! publication) {
      return;
    }

    this.id = publication.id ?? '';
    this.author = publication.author;
    this.createDate = publication.createDate;
    this.status = publication.status;
    this.tags = publication.tags;
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
      author: this.author,
      createDate: this.createDate,
      status: this.status,
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
    }
  }
}
