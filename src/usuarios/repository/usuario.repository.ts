import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entity/Usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
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
