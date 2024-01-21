import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  /*  
  instalados os pacotes de validação (ValidationPipe)
   npm i --save class-validator class-transformer 
   */
  const app = await NestFactory.create(AppModule);
  // implementando a instancia do ValidationPipe ao app.
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
