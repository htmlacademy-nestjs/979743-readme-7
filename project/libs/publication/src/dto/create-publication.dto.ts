import { ValidateIf } from 'class-validator';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class CreatePublicationDto {
  public type: PostType;

  @ValidateIf((o) => o.tags.length === 0)
  public tags?: string[];

  @ValidateIf((o) => o.link === '')
  public link?: string;

  @ValidateIf((o) => o.linkDescription === '')
  public linkDescription?: string;

  @ValidateIf((o) => o.photo === '')
  public photo?: string;

  @ValidateIf((o) => o.videoTitle === '')
  public videoTitle?: string;

  @ValidateIf((o) => o.videoLink === '')
  public videoLink?: string;

  @ValidateIf((o) => o.quoteText === '')
  public quoteText?: string;

  @ValidateIf((o) => o.quoteAuthor === '')
  public quoteAuthor?: string;

  @ValidateIf((o) => o.textTitle === '')
  public textTitle?: string;

  @ValidateIf((o) => o.textNotice === '')
  public textNotice?: string;

  @ValidateIf((o) => o.textContent === '')
  public textContent?: string;
}
