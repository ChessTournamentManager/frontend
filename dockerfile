FROM node:lts-alpine

COPY . ./
WORKDIR /vueApp
RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]