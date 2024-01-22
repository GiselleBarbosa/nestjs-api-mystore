import { AtualizaUsuariosDTO } from '../dto/AtualizaUsuario.dto';
import { CriaUsuariosDTO } from '../dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from '../dto/ListaUsuario.dto';
import { UsuarioEntity } from '../entity/Usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuariosDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.password = dadosDoUsuario.password;
    usuarioEntity.name = dadosDoUsuario.name;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);

    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.name),
      message: 'Usuário criado com sucesso!!',
    };
  }

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map((usuario) => new ListaUsuarioDTO(usuario.id, usuario.name));

    return usuariosLista;
  }

  @Put('/:id')
  async atualizarUsuarios(@Param('id') id: string, @Body() novosDados: AtualizaUsuariosDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualizar(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      message: 'Usuário atualizado com sucesso.',
    };
  }

  @Delete('/:id')
  async removerUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioRepository.remover(id);

    return {
      message: 'Usuário removido com sucesso.',
      usuario: usuarioRemovido,
    };
  }
}
