import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty({
    description: 'The uniq ID of corresponding publication',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  public publicationId: string;

  @ApiProperty({
    description: 'The text of comment',
    example: 'Realy cool post!',
  })
  public commentText: string;
}
