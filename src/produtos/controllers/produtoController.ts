import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoRepository } from '../repository/produto.repository';
import { CriaProdutoDTO } from '../dto/CriaProduto.dto';
import { ProdutoEntity } from '../entity/Produto.entity';
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from '../dto/AtualizaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();

    produtoEntity.id = uuid();
    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
    produtoEntity.descricao = dadosDoProduto.descricao;

    produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    produtoEntity.imagens = dadosDoProduto.imagens;

    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.dataCriacao = dadosDoProduto.dataCriacao;
    produtoEntity.dataAtualizacao = dadosDoProduto.dataAtualizacao;

    this.produtoRepository.criar(produtoEntity);

    return {
      message: 'Produto criado com sucesso!!',
      produtoEntity,
    };
  }

  @Get()
  async listarProdutos() {
    const produtosSalvos = await this.produtoRepository.listar();
    return produtosSalvos;
  }

  @Put('/:id')
  async atualizarUsuarios(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
    const produtoAtualizado = await this.produtoRepository.atualizar(id, novosDados);

    return {
      message: 'Produto atualizado com sucesso.',
      usuario: produtoAtualizado,
    };
  }

  @Delete('/:id')
  async removerProduto(@Param('id') id: string) {
    const produtoRemovido = await this.produtoRepository.remover(id);

    return {
      message: 'Produto removido com sucesso.',
      usuario: produtoRemovido,
    };
  }
}
