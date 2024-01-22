import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../repository/usuario.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const emailDeUsuarioExiste = await this.usuarioRepository.checaSeEmailExiste(value);
    return !emailDeUsuarioExiste;
  }
}

export const EmailEhUnico = (opcoesDeValidacoes: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacoes,
      constraints: [],
      validator: EmailEhUnicoValidator,
    });
  };
};
