import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from '../entity/Produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  async criar(produto: ProdutoEntity) {
    this.produtos.push(produto);
  }

  async listar() {
    return this.produtos;
  }

  async atualizar(id: string, novosDadosDoProduto: Partial<ProdutoEntity>) {
    const produto = this.buscaPorId(id);

    Object.entries(novosDadosDoProduto).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      produto[chave] = valor;
    });
    return produto;
  }

  async remover(id: string) {
    const produto = this.buscaPorId(id);

    this.produtos = this.produtos.filter((produtoSalvo) => produtoSalvo.id !== id);

    return produto;
  }

  async checaSeNomeExiste(nome: string) {
    const produtoVerificado = this.produtos.find((produto) => produto.nome === nome);

    return produtoVerificado !== undefined;
  }

  private buscaPorId(id: string) {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }
}
