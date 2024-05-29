FROM node:20

WORKDIR /usr/app

ENV COOKIE_SECRET=anfUuNn0jQ42PgxeEMVD1SKvCdukfFCj
ENV DATABASE_URL=postgres://postgres:postgres@localhost:5435/adminjs_db


COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY . .

RUN npm i -g typescript

RUN yarn build

RUN npx prisma generate

EXPOSE 5001

CMD yarn start:dev
