import { CriaUsuariosDTO } from '../dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from '../dto/ListaUsuario.dto';
import { usuarioEntity } from '../entity/usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() novoUsuario: CriaUsuariosDTO) {
    const dadosDoUsuario = new usuarioEntity();

    dadosDoUsuario.email = novoUsuario.email;
    dadosDoUsuario.password = novoUsuario.password;
    dadosDoUsuario.name = novoUsuario.name;
    dadosDoUsuario.id = uuid();

    this.usuarioRepository.salvar(dadosDoUsuario);

    return {
      id: dadosDoUsuario.id,
      message: 'Usuário cadastrado com sucesso!',
      novoUsuario,
    };
  }

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map((usuario) => new ListaUsuarioDTO(usuario.id, usuario.name));

    return usuariosLista;
  }
}
