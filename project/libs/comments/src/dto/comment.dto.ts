import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsUUID } from 'class-validator';
import { CommentDtoValidation } from '../comment.constant';

export class CommentDto {
  @ApiProperty({
    description: 'The uniq ID of corresponding publication',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @IsString()
  @IsUUID()
  public publicationId: string;

  @ApiProperty({
    description: 'The text of comment',
    example: 'Realy cool post!',
  })
  @IsString()
  @MinLength(CommentDtoValidation.CommentTextMinLength)
  @MaxLength(CommentDtoValidation.CommentTextMaxLength)
  public commentText: string;
}
