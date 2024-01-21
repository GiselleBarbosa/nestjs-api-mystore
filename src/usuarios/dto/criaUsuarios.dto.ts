import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuariosDTO {
  // Os decorators são os validators do NestJS
  @IsNotEmpty()
  cpf: string;

  @IsString()
  name: string;

  @IsString()
  mobile: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  birthday: string;
}
