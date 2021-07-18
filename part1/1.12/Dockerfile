FROM ubuntu

WORKDIR /usr/src/app
COPY . .
EXPOSE 5000

RUN apt update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt install -y nodejs

RUN npm install

RUN npm run build

RUN npm install -g serve
CMD ["serve", "-s", "-l 5000", "build"]

