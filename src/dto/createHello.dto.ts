import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateHelloDTO {
  @IsString()
  name: string;

  @IsNumberString()
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address?: string;
}
