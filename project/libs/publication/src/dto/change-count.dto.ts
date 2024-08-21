import { ApiProperty } from '@nestjs/swagger';
import { CountChange } from '@project/core';

export class ChangeCountDto {
  @ApiProperty({
    description: 'Increase or decrease likes and comments number of publication',
    example: 1,
  })
  public countChange: CountChange;
}
