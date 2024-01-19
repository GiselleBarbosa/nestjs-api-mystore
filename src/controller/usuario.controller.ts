import { UsuarioRepository } from './../repository/usuario.repository';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  private UsuarioRepository = new UsuarioRepository();

  @Post()
  async criarUsuario(@Body() dadosDoUsuario) {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
