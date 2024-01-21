import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from '../repository/produto.repository';
import { CriaProdutoDTO } from '../dto/criaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const novoProduto = this.produtoRepository.salvar(dadosDoProduto);
    return novoProduto;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }
}
