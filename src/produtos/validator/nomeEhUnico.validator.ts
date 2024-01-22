import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from '../repository/produto.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class NomeEhUnicoValidator implements ValidatorConstraintInterface {
  constructor(private produtoRepository: ProdutoRepository) {}

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const nomeProdutoJaExiste = await this.produtoRepository.checaSeNomeExiste(value);
    return !nomeProdutoJaExiste;
  }
}

export const NomeEhUnico = (opcoesDeValidacoes: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacoes,
      constraints: [],
      validator: NomeEhUnicoValidator,
    });
  };
};
