import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';
import { setupAdminJS } from './config/admin-setup.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupAdminJS(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
