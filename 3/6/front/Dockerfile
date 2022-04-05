FROM node:16.13.2-slim as front-build

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN apt-get update && apt-get install git -y && \
    git clone https://github.com/docker-hy/material-applications.git && \
    useradd -m frontuser && \
    chown frontuser . && \
    cp -r material-applications/example-frontend/* . && \
    npm install && \
    npm run build

FROM alpine:3.15.3

WORKDIR /app

EXPOSE 5000

RUN apk add --update nodejs npm && \
    npm install -g serve

COPY --from=front-build /etc/passwd /etc/passwd
COPY --from=front-build /usr/src/app/build/ /app/build

USER frontuser

CMD ["serve", "-s", "-l", "5000", "build"]
