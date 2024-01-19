import { UsuarioRepository } from './../repository/usuario.repository';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  private UsuarioRepository = new UsuarioRepository();

  @Post()
  async criarUsuario(@Body() dadosDoUsuario) {
    this.UsuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listarUsuarios() {
    return this.UsuarioRepository.listar();
  }
}
