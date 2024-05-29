import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './modules/users/users.module.js';
import { PrismaService } from './prisma/prisma.service.js';
import { fileURLToPath } from 'url';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public'),
    // }),
    // AdminModule.createAdminAsync({
    //   useFactory: async () => {
    //     return {
    //       adminJsOptions: options,
    //       auth: {
    //         provider,
    //         cookiePassword: process.env.COOKIE_SECRET,
    //         cookieName: 'adminjs',
    //       },
    //       sessionOptions: {
    //         resave: true,
    //         saveUninitialized: true,
    //         secret: process.env.COOKIE_SECRET,
    //       },
    //     };
    //   },
    // }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
