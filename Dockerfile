FROM ubuntu:latest

ENV NODE_VERSION=21

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_"$NODE_VERSION".x | bash - && \
    apt-get install -y nodejs

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run start
