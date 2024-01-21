import { CriaUsuariosDTO } from '../dto/criaUsuarios.dto';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Body, Controller, Get, Post } from '@nestjs/common';

//adicionado constrututor e o decorator @injectable para instanciar o repository
@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  //implementado DTO para tipagem dos dados do usuario
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuariosDTO) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioRepository.listar();
  }
}
