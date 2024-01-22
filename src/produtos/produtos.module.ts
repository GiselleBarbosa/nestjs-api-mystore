import { EmailEhUnicoValidator } from 'src/usuarios/validator/emailEhUnico.validator';
import { Module } from '@nestjs/common';
import { NomeEhUnicoValidator } from './validator/nomeEhUnico.validator';
import { ProdutoController } from './controllers/produtoController';
import { ProdutoRepository } from './repository/produto.repository';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, NomeEhUnicoValidator],
})
export class ProdutosModule {}
