FROM golang:1.16

WORKDIR /go/src/app
COPY ../../1/13/example-backend .
EXPOSE 8080

ENV REQUEST_ORIGIN=http://localhost:5000
RUN useradd -m backuser

USER backuser

RUN go build

CMD ./server
