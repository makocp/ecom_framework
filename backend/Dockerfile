FROM node:latest
WORKDIR /backend
ADD . .
RUN npm install
CMD ["npx", "ts-node", "server.ts"]