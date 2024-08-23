import { PostStatus } from '@project/core';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PostType } from 'libs/shared/core/src/types/post-type.enam';

export class PublicationRdo {
  @ApiProperty({
    description: 'The uniq publication ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The type of publication',
    example: 'photo',
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    description: 'The author of publication',
    example: 'Anna GW',
  })
  @Expose()
  public author: string;

  @ApiProperty({
    description: 'Create publication date (ISO format)',
    example: '2024-08-12',
  })
  @Expose()
  public createDate: Date;

  @ApiProperty({
    description: 'Last edit publication date (ISO format)',
    example: '2024-08-12',
  })
  @Expose()
  public lastEditDate: Date;

  @ApiProperty({
    description: 'Status of publication',
    example: 'published',
  })
  @Expose()
  public postStatus: PostStatus;

  @ApiProperty({
    description: 'Flag of publication repost',
    example: 'false',
  })
  @Expose()
  public isReposted: boolean;

  @ApiProperty({
    description: 'Number of likes',
    example: 100,
  })
  @Expose()
  public likesCount: number;

  @ApiProperty({
    description: 'Number of comments',
    example: 15,
  })
  @Expose()
  public commentsCount: number;

  @ApiProperty({
    description: 'Publication tags',
    example: '#news, #lifestyle',
  })
  @Expose()
  public tags: string;

  @ApiProperty({
    description: 'Link to original source',
    example: 'https://github.com/htmlacademy-nestjs/typoteka-6/pull/3/commits/018c09260c0028579f056d3f9babef5f8968ee09',
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Link to original source description',
    example: 'Node.js и Nest.js. Microservice architecture',
  })
  @Expose()
  public linkDescription: string;

  @ApiProperty({
    description: 'Publication photo path',
    example: '/photos/cool-photo.jpg',
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Publication video title',
    example: 'Igor Antonov. My way to IT',
  })
  @Expose()
  public videoTitle: string;

  @ApiProperty({
    description: 'Publication video link',
    example: 'https://www.youtube.com/watch?v=NI2i8OPFTbQ',
  })
  @Expose()
  public videoLink: string;

  @ApiProperty({
    description: 'Publication quote text',
    example: 'Sic transit gloria mundi',
  })
  @Expose()
  public quoteText: string;

  @ApiProperty({
    description: 'Publication quote author',
    example: 'Vicar of Christ',
  })
  @Expose()
  public quoteAuthor: string;

  @ApiProperty({
    description: 'Publication text title',
    example: 'Last news',
  })
  @Expose()
  public textTitle: string;

  @ApiProperty({
    description: 'Publication text notice',
    example: 'life is Beautiful!',
  })
  @Expose()
  public textNotice: string;

  @ApiProperty({
    description: 'Publication content',
    example: 'Some wise thoughts...',
  })
  @Expose()
  public textContent: string;
}
