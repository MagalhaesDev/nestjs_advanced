import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>({
    module: AppModule,
    httpAdapter: new FastifyAdapter(),
  });
  await app.listen(3333, '0.0.0.0');
}
bootstrap();
