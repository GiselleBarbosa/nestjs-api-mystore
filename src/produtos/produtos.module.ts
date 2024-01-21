import { Module } from '@nestjs/common';
import { ProdutoController } from './controllers/produtoController';
import { ProdutoRepository } from './repository/produto.repository';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutosModule {}
