import AdminJSExpress from '@adminjs/express';
import AdminJS from 'adminjs';
import session from 'express-session';
import { Router } from 'express';
import ConnectPgSimple from 'connect-pg-simple';

export const authenticateUser = async (email: string, password: string) => {
  if (email === 'admin@example.com') {
    return { email: 'admin@example.com' };
  }
  // const user = await AdminModel.findOne({ email });
  // if (user && (await argon2.verify(user.password, password))) {
  //   const userData = AuthUsers.find((au) => email === au.email);
  //   return { ...userData, ...user.toObject() };
  // }
  return null;
};

export const expressAuthenticatedRouter = (adminJs: AdminJS, router: Router | null = null) => {
  const ConnectSession = ConnectPgSimple(session);

  const sessionStore = new ConnectSession({
    conObject: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production',
    },
    tableName: 'session',
    createTableIfMissing: true,
  });

  return AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: authenticateUser,
      cookieName: process.env.SESSION_SECRET,
      cookiePassword: process.env.SESSION_SECRET ?? 'sessionsecret',
    },
    router,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET ?? 'sessionsecret',
      cookie: {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
      },
      name: process.env.SESSION_SECRET,
    }
  );
};
