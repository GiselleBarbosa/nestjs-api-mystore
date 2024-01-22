import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './../entity/Usuario.entity';
import e from 'express';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async atualizar(id: string, novosDadosDoUsuario: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorId(id);

    Object.entries(novosDadosDoUsuario).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      usuario[chave] = valor;
    });
    return usuario;
  }

  async remover(id: string) {
    const usuario = this.buscaPorId(id);

    this.usuarios = this.usuarios.filter((usuarioSalvo) => usuarioSalvo.id !== id);

    return usuario;
  }

  async checaSeEmailExiste(email: string) {
    const usuarioVerificado = this.usuarios.find((usuario) => usuario.email === email);

    return usuarioVerificado !== undefined;
  }

  private buscaPorId(id: string) {
    const usuarioExiste = this.usuarios.find((usuario) => usuario.id === id);

    if (!usuarioExiste) {
      throw new Error('Usuário não existe');
    }

    return usuarioExiste;
  }
}
