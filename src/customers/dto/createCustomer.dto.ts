import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  cpf: string;

  @IsMobilePhone('pt-BR')
  mobile: string;
  //   @IsPostalCode('BR')
  //  zipCode: string;
}
