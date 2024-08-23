import { IsOptional, ValidateIf, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class UpdatePublicationDto {
  @ApiProperty({
    description: 'ID of original publication for repost',
    example: 'c493b91d-d1aa-4bb0-b133-ea5830044510',
  })
  public originalID?: string;

  @ApiProperty({
    description: 'ID of original publication author for repost',
    example: 'c493b91d-d1aa-4bb0-b133-ea5830044510',
  })
  public originalAuthorID?: string;

  @ApiProperty({
    description: 'Publication type',
    example: 'photo',
  })
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
  @IsOptional()
  @ValidateIf((o) => o.link === PostType.Link)
  public link?: string;

  @ApiProperty({
    description: 'Link to original source description',
    example: 'Node.js и Nest.js. Microservice architecture',
  })
  @IsOptional()
  public linkDescription?: string;

  @ApiProperty({
    description: 'Publication photo path',
    example: '/photos/cool-photo.jpg',
  })
  @ValidateIf((o) => o.photo === PostType.Photo)
  @IsString()
  @IsNotEmpty()
  public photo?: string;

  @ApiProperty({
    description: 'Publication video title',
    example: 'Igor Antonov. My way to IT',
  })
  @ValidateIf((o) => o.videoTitle === PostType.Video)
  public videoTitle?: string;

  @ApiProperty({
    description: 'Publication video link',
    example: 'https://www.youtube.com/watch?v=NI2i8OPFTbQ',
  })
  @ValidateIf((o) => o.videoLink === PostType.Video)
  public videoLink?: string;

  @ApiProperty({
    description: 'Publication quote text',
    example: 'Sic transit gloria mundi',
  })
  @ValidateIf((o) => o.type === PostType.Quote)
  public quoteText?: string;

  @ApiProperty({
    description: 'Publication quote author',
    example: 'Vicar of Christ',
  })
  @ValidateIf((o) => o.type === PostType.Quote)
  public quoteAuthor?: string;

  @ApiProperty({
    description: 'Publication text title',
    example: 'Last news',
  })
  @ValidateIf((o) => o.textTitle === PostType.Text)
  public textTitle?: string;

  @ApiProperty({
    description: 'Publication text notice',
    example: 'life is Beautiful!',
  })
  @ValidateIf((o) => o.textNotice === PostType.Text)
  public textNotice?: string;

  @ApiProperty({
    description: 'Publication content',
    example: 'Some wise thoughts...',
  })
  @ValidateIf((o) => o.textContent === PostType.Text)
  public textContent?: string;
}
