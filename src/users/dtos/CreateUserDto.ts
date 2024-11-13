import { IsString, IsBoolean, IsOptional, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsStrongPassword()
  firstName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
