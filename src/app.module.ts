import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
