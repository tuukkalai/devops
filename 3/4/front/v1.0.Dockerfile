FROM ubuntu

WORKDIR /usr/src/app

COPY ./example-frontend .
EXPOSE 5000
ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt install -y nodejs
RUN npm install
RUN npm install -g serve
RUN npm run build
RUN useradd -m frontuser
RUN chown frontuser .

USER frontuser

CMD ["serve", "-s", "-l", "5000", "build"]

