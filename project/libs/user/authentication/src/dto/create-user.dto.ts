import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength, MaxLength } from 'class-validator';
import { AuthenticationValidateMessage } from '../authentication.constant';
import { UserDtoValidation } from '../authentication.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User surname and name',
    example: 'Keks',
  })
  @IsString()
  @MinLength(UserDtoValidation.UserNameMinLength)
  @MaxLength(UserDtoValidation.UserNameMaxLength)
  public name: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
  })
  @IsOptional()
  @IsString()
  public avatar?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  @IsString()
  @MinLength(UserDtoValidation.PasswordMinLength)
  @MaxLength(UserDtoValidation.PasswordMaxLength)
  public password: string;
}
