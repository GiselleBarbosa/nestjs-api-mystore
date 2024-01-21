import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuariosDTO {
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsString({ message: 'CPF inválido' })
  cpf: string;

  @IsString({ message: 'Nome é inválido' })
  name: string;

  @IsString({ message: 'Telefone informado é obrigátorio' })
  mobile: string;

  @IsEmail(undefined, { message: 'Email informado é invalido' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no minímo 6 caracteres' })
  password: string;

  @IsString({ message: 'Data inválida' })
  birthday: string;
}
