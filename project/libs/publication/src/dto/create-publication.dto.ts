import { IsOptional, ValidateIf, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';
import { PublicationDtoValidation } from '../publication.constant';

export class CreatePublicationDto {
  @ApiProperty({
    description: 'Publication type',
    example: 'photo',
  })
  @IsString()
  public type: PostType;

  @ApiProperty({
    description: 'Publication tags',
    example: '#news, #lifestyle',
  })
  @IsOptional()
  public tags?: string;

  @ApiProperty({
    description: 'Link to original source',
    example: 'https://github.com/htmlacademy-nestjs/typoteka-6/pull/3/commits/018c09260c0028579f056d3f9babef5f8968ee09',
  })
  @ValidateIf((o) => o.type === PostType.Link)
  @IsNotEmpty()
  public link?: string;

  @ApiProperty({
    description: 'Link to original source description',
    example: 'Node.js и Nest.js. Microservice architecture',
  })
  @ValidateIf((o) => o.type === PostType.Link)
  @IsNotEmpty()
  @MaxLength(PublicationDtoValidation.LinkDescriptionMaxLength)
  public linkDescription?: string;

  @ApiProperty({
    description: 'Publication photo path',
    example: '/photos/cool-photo.jpg',
  })
  @ValidateIf((o) => o.type === PostType.Photo)
  @IsNotEmpty()
  public photo?: string;

  @ApiProperty({
    description: 'Publication video title',
    example: 'Igor Antonov. My way to IT',
  })
  @ValidateIf((o) => o.type === PostType.Video)
  @IsNotEmpty()
  @MaxLength(PublicationDtoValidation.VideoTitleMaxLength)
  @MinLength(PublicationDtoValidation.VideoTitleMinLength)
  public videoTitle?: string;

  @ApiProperty({
    description: 'Publication video link',
    example: 'https://www.youtube.com/watch?v=NI2i8OPFTbQ',
  })
  @ValidateIf((o) => o.type === PostType.Video)
  @IsNotEmpty()
  public videoLink?: string;

  @ApiProperty({
    description: 'Publication quote text',
    example: 'Sic transit gloria mundi',
  })
  @ValidateIf((o) => o.type === PostType.Quote)
  @IsNotEmpty()
  @MinLength(PublicationDtoValidation.QuoteTextMinLength)
  @MaxLength(PublicationDtoValidation.QuoteTextMaxLength)
  public quoteText?: string;

  @ApiProperty({
    description: 'Publication quote author',
    example: 'Vicar of Christ',
  })
  @ValidateIf((o) => o.type === PostType.Quote)
  @IsNotEmpty()
  @MinLength(PublicationDtoValidation.QuoteAuthorMinLength)
  @MaxLength(PublicationDtoValidation.QuoteAuthorMaxLength)
  public quoteAuthor?: string;

  @ApiProperty({
    description: 'Publication text title',
    example: 'Last news',
  })
  @ValidateIf((o) => o.type === PostType.Text)
  @IsNotEmpty()
  @MinLength(PublicationDtoValidation.TextTitleMinLength)
  @MaxLength(PublicationDtoValidation.TextTitleMaxLength)
  public textTitle?: string;

  @ApiProperty({
    description: 'Publication text notice',
    example: 'life is Beautiful!',
  })
  @ValidateIf((o) => o.type === PostType.Text)
  @IsNotEmpty()
  @MinLength(PublicationDtoValidation.TextNoticeMinLength)
  @MaxLength(PublicationDtoValidation.TextNoticeMaxLength)
  public textNotice?: string;

  @ApiProperty({
    description: 'Publication content',
    example: 'Some wise thoughts...',
  })
  @ValidateIf((o) => o.type === PostType.Text)
  @IsNotEmpty()
  @MinLength(PublicationDtoValidation.TextContentMinLength)
  @MaxLength(PublicationDtoValidation.TextContentMaxLength)
  public textContent?: string;
}
