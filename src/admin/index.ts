// Adapters
import { Database as PrismaDatabase, Resource as PrismaResource, getModelByName } from '@adminjs/prisma';
import { dark, light, noSidebar } from '@adminjs/themes';

import AdminJS, { AdminJSOptions, ResourceOptions } from 'adminjs';

import './components.bundler.js';
import { componentLoader } from './components.bundler.js';
import { AuthUsers } from './constants/authUsers.js';
import pages from './pages/index.js';
import { customTheme } from './themes/index.js';
import { PrismaClient } from '@prisma/client';
// import { UsersResource } from './resources/users.resources.js';

const prisma = new PrismaClient();

AdminJS.registerAdapter({ Database: PrismaDatabase, Resource: PrismaResource });

export const menu: Record<string, ResourceOptions['navigation']> = {
  prisma: { name: 'Prisma', icon: 'Folder' },
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
  version: { admin: true, app: '2.0.0' },
  rootPath: '/admin',
  assets: {
    styles: ['/custom.css'],
    scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
  },
  branding: {
    companyName: 'AdminJS',
    withMadeWithLove: false,
    // logo: 'logo.png',
    // favicon: '/favicon.ico',
    theme: {
      colors: { primary100: '#4D70EB' },
    },
  },
  defaultTheme: 'light',
  availableThemes: [light, dark, noSidebar, customTheme],
  componentLoader,
  pages,
  env: {
    STORYBOOK_URL: process.env.STORYBOOK_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    SLACK_URL: process.env.SLACK_URL,
    DOCUMENTATION_URL: process.env.DOCUMENTATION_URL,
  },
  resources: [
    // prisma
    // UsersResource(),
    {
      resource: { model: getModelByName('User'), client: prisma },
    },
    {
      resource: { model: getModelByName('User'), client: prisma },
    },
  ],
});

// export const createAuthUsers = async () =>
//   Promise.all(
//     AuthUsers.map(async ({ email, password }) => {
//       const admin = await AdminModel.findOne({ email });
//       if (!admin) {
//         await AdminModel.create({ email, password: await argon2.hash(password) });
//       }
//     }),
//   );
