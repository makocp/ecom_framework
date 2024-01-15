FROM node:latest
WORKDIR /backend
ADD . .
RUN npm install
CMD ["ts-node", "server.ts"]