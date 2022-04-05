FROM node:16.13.2-slim as front-build

WORKDIR /usr/src/app

COPY ./example-frontend .
ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN npm install && \
    npm run build

FROM alpine:3.15.3

WORKDIR /app

EXPOSE 5000

RUN apk add --update nodejs npm && \
    npm install -g serve

COPY --from=front-build /usr/src/app/build/ /app/build

CMD ["serve", "-s", "-l", "5000", "build"]
