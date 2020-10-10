FROM strapi/base

WORKDIR /usr/src/ubuntu/sayedmubarak/strapi/blog-managment-system

COPY package*.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
