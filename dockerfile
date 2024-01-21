FROM node:18-alpine

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build && npx prisma migrate deploy

EXPOSE 3000

CMD ["npm","start"]