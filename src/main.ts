import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Factory.
  const app = await NestFactory.create(AppModule);

  //API CEP
  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  });

  // Teremos validações. Conhecidas como Validation Pipes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
