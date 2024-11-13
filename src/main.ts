import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log('the app is running on', PORT);
  });
}
bootstrap();
