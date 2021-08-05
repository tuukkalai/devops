FROM ubuntu

WORKDIR /usr/src/app
COPY . .
EXPOSE 3000

RUN apt update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt install -y nodejs

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s", "-l", "3000", "build"]

