import { EmailEhUnicoValidator } from './utils/validator/emailEhUnico.validator';
import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioRepository } from './repository/usuario.repository';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuariosModule {}
