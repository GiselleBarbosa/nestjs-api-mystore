import { Injectable } from '@nestjs/common';
import { usuarioEntity } from '../entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: usuarioEntity[] = [];

  async salvar(usuario: usuarioEntity) {
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
