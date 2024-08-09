import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CommentRdo {
  @ApiProperty({
    description: 'The uniq comment ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The uniq ID of corresponding publication',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  public publicationId: string;

  @ApiProperty({
    description: 'The text of comment',
    example: 'Realy cool post!',
  })
  @Expose()
  public commentText: string;

  @ApiProperty({
    description: 'The author of comment',
    example: 'Anna GW',
  })
  @Expose()
  public commentAuthor: string;

  @ApiProperty({
    description: 'Create comment date (ISO format)',
    example: '2024-08-12',
  })
  @Expose()
  public createCommentDate: Date;
}
