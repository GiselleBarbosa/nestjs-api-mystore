import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuarioModule } from './usuarios/usuario.module';

@Module({
  imports: [UsuarioModule, ProdutosModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
