import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { Logger } from '@nestjs/common';

async function bootstrap() {
  /* const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000); */ 
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'], // Enable all log levels
  });

  await app.listen(3000);
  Logger.log('Application is running on: http://localhost:3000', 'Bootstrap');
}
bootstrap();
