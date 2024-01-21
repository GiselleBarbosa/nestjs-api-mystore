import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async checaSeEmailExiste(email: string) {
    const usuarioVerificado = this.usuarios.find((usuario) => usuario.email === email);

    return usuarioVerificado !== undefined;
  }
}
