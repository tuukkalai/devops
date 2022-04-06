FROM golang:1.16 as build-go

WORKDIR /go/src/app

RUN useradd -m backuser && chown -R backuser . && \
	git clone https://github.com/docker-hy/material-applications.git && \
	cp -r material-applications/example-backend/* .

USER backuser

RUN CGO_ENABLED=0 go build

FROM scratch

EXPOSE 8080
ENV REQUEST_ORIGIN=http://localhost:5000

WORKDIR /usr/src/app

COPY --from=build-go /etc/passwd /etc/passwd
COPY --from=build-go /go/src/app/server /usr/src/app

USER backuser

CMD ["./server"]