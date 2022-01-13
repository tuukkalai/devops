FROM ubuntu:18.04

EXPOSE 8080
ENV REQUEST_ORIGIN=http://localhost:5000
ENV PATH="${PATH}:/usr/local/go/bin"

WORKDIR /go/src/app
COPY ./example-backend .

RUN apt update && \
    apt install -y curl && \
    rm -rf /usr/local/go && \
    curl -sL https://go.dev/dl/go1.16.13.linux-amd64.tar.gz -o ./go16.tar.gz && \
    apt purge -y --auto-remove curl && \
    rm -rf /var/lib/apt/lists/* && \
    tar -C /usr/local -xzf go16.tar.gz && \
    rm go16.tar.gz && \
    useradd -m backuser && \
    go build

USER backuser

CMD ./server
