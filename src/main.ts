import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { config } from 'dotenv';

async function bootstrap() {
  config();

  const PORT = process.env.SERVER_PORT;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(PORT);
}

bootstrap();
