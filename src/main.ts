import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';
import { setupAdminJS } from './config/admin-setup.js';
import { NestExpressApplication } from '@nestjs/platform-express';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await setupAdminJS(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
