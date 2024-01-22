import { CaracteristicaProdutoDTO } from '../dto/CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from '../dto/ImagemProduto.dto';

export class ProdutoEntity {
  id: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDTO[];
  categoria: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}
