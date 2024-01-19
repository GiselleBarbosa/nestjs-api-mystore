import { Body, Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  @Post()
  async criarUsuario(@Body() dadosDoUsuario) {
    return dadosDoUsuario;
  }
}

/*  @Post()
  async criarUsuario(@Body() dadosDoUsuario) {
  return { message: 'Usuário criado com sucesso!', dadosDoUsuario }; 
  } */
