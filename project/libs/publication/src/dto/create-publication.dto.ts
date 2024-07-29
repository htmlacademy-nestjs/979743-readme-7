import { IsOptional, ValidateIf, IsNotEmpty, IsString } from 'class-validator';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class CreatePublicationDto {
  public type: PostType;

  @IsOptional()
  public tags: string[];

  @ValidateIf((o) => o.link === PostType.Link)
  public link: string;

  @IsOptional()
  public linkDescription: string;

  @ValidateIf((o) => o.photo === PostType.Photo)
  @IsString()
  @IsNotEmpty()
  public photo: string;

  @ValidateIf((o) => o.videoTitle === PostType.Video)
  public videoTitle: string;

  @ValidateIf((o) => o.videoLink === PostType.Video)
  public videoLink: string;

  @ValidateIf((o) => o.type === PostType.Quote)
  public quoteText: string;

  @ValidateIf((o) => o.type === PostType.Quote)
  public quoteAuthor: string;

  @ValidateIf((o) => o.textTitle === PostType.Text)
  public textTitle: string;

  @ValidateIf((o) => o.textNotice === PostType.Text)
  public textNotice: string;

  @ValidateIf((o) => o.textContent === PostType.Text)
  public textContent: string;
}
