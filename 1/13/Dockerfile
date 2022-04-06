FROM golang:1.16

WORKDIR /go/src/app
EXPOSE 8080

ENV REQUEST_ORIGIN=http://localhost:5000

RUN git clone https://github.com/docker-hy/material-applications.git && \
	cp -r material-applications/example-backend/* . && \
	go build

CMD ./server
