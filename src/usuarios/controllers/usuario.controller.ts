import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AtualizaUsuariosDTO } from '../dto/AtualizaUsuario.dto';
import { CriaUsuariosDTO } from '../dto/CriaUsuario.dto';
import { UsuarioEntity } from '../entity/Usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuariosDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.id = uuid();
    usuarioEntity.name = dadosDoUsuario.name;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.password = dadosDoUsuario.password;

    this.usuarioRepository.criar(usuarioEntity);

    return {
      message: 'Usuário criado com sucesso!!',
      usuarioEntity,
    };
  }

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    return usuariosSalvos;
  }

  @Put('/:id')
  async atualizarUsuarios(@Param('id') id: string, @Body() novosDados: AtualizaUsuariosDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualizar(id, novosDados);

    return {
      message: 'Usuário atualizado com sucesso.',
      usuario: usuarioAtualizado,
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
