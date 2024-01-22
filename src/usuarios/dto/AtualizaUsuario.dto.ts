import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

import { EmailEhUnico } from '../validator/emailEhUnico.validator';

export class AtualizaUsuariosDTO {
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsOptional()
  @IsString({ message: 'CPF inválido' })
  cpf: string;

  @IsString({ message: 'Nome é inválido' })
  @IsOptional()
  name: string;

  @IsString({ message: 'Telefone informado é obrigátorio' })
  @IsOptional()
  mobile: string;

  @EmailEhUnico({ message: 'Já existe uma conta com o email informado.' })
  @IsEmail(undefined, { message: 'Email informado é invalido' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha deve ter no minímo 6 caracteres' })
  @IsOptional()
  password: string;

  @IsString({ message: 'Data inválida' })
  @IsOptional()
  birthday: string;
}
