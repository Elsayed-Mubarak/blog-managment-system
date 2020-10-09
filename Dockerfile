FROM strapi/base

WORKDIR /usr/src/ubuntu/sayedmubarak/strapi/blog-managment-system

COPY package*.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
