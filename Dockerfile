FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./dist/server.js ./
RUN npm install --prod
EXPOSE 3000
CMD ["node", "server.js"]