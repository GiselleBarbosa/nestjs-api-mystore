import { CriaUsuariosDTO } from '../dto/criaUsuario.dto';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuariosDTO) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return { message: 'Usuário cadastrado com sucesso!', dadosDoUsuario };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioRepository.listar();
  }
}
