# Different FROMs

```sh
docker images | grep back35

back35       golang    b74de2983018   About a minute ago   1.07GB
back35       alpine    0c015f67153c   2 hours ago          655MB
back35       goalp     639f97de1c12   13 minutes ago       467MB
```

## FROM golang

[Dockerfile.golang](./Dockerfile.golang)

```sh
docker image history back35:golang

IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
b74de2983018   About a minute ago   CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      About a minute ago   RUN /bin/sh -c go build # buildkit              146MB     buildkit.dockerfile.v0
<missing>      About a minute ago   USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      About a minute ago   RUN /bin/sh -c useradd -m backuser && chown …   363kB     buildkit.dockerfile.v0
<missing>      About a minute ago   ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      About a minute ago   EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      4 days ago           COPY ./example-backend . # buildkit             29.9kB    buildkit.dockerfile.v0
<missing>      4 days ago           WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      7 days ago           /bin/sh -c #(nop) WORKDIR /go                   0B        
<missing>      7 days ago           /bin/sh -c mkdir -p "$GOPATH/src" "$GOPATH/b…   0B        
<missing>      7 days ago           /bin/sh -c #(nop)  ENV PATH=/go/bin:/usr/loc…   0B        
<missing>      7 days ago           /bin/sh -c #(nop)  ENV GOPATH=/go               0B        
<missing>      7 days ago           /bin/sh -c set -eux;  arch="$(dpkg --print-a…   387MB     
<missing>      7 days ago           /bin/sh -c #(nop)  ENV GOLANG_VERSION=1.16.13   0B        
<missing>      3 weeks ago          /bin/sh -c #(nop)  ENV PATH=/usr/local/go/bi…   0B        
<missing>      3 weeks ago          /bin/sh -c set -eux;  apt-get update;  apt-g…   227MB     
<missing>      3 weeks ago          /bin/sh -c apt-get update && apt-get install…   152MB     
<missing>      3 weeks ago          /bin/sh -c set -ex;  if ! command -v gpg > /…   18.9MB    
<missing>      3 weeks ago          /bin/sh -c set -eux;  apt-get update;  apt-g…   10.7MB    
<missing>      3 weeks ago          /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      3 weeks ago          /bin/sh -c #(nop) ADD file:c03517c5ddbed4053…   124MB     
```

## FROM alpine

[Dockerfile.alpine](./Dockerfile.alpine)

```sh
docker image history back35:alpine

IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
0c015f67153c   2 hours ago   CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      2 hours ago   USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      2 hours ago   RUN /bin/sh -c apk add --no-cache go &&     …   649MB     buildkit.dockerfile.v0
<missing>      2 hours ago   COPY ./example-backend . # buildkit             29.9kB    buildkit.dockerfile.v0
<missing>      2 hours ago   WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      2 hours ago   ENV PATH=/usr/local/sbin:/usr/local/bin:/usr…   0B        buildkit.dockerfile.v0
<missing>      2 hours ago   ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      2 hours ago   EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      7 weeks ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B        
<missing>      7 weeks ago   /bin/sh -c #(nop) ADD file:9233f6f2237d79659…   5.59MB    
```

## FROM golang:alpine

[Dockerfile.goalp](./Dockerfile.goalp)

```sh
docker image history back35:goalp

IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
639f97de1c12   14 minutes ago   CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      14 minutes ago   USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      14 minutes ago   RUN /bin/sh -c adduser -D backuser &&     go…   152MB     buildkit.dockerfile.v0
<missing>      14 minutes ago   COPY ./example-backend . # buildkit             29.9kB    buildkit.dockerfile.v0
<missing>      14 minutes ago   WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      14 minutes ago   ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      14 minutes ago   EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      7 days ago       /bin/sh -c #(nop) WORKDIR /go                   0B        
<missing>      7 days ago       /bin/sh -c mkdir -p "$GOPATH/src" "$GOPATH/b…   0B        
<missing>      7 days ago       /bin/sh -c #(nop)  ENV PATH=/go/bin:/usr/loc…   0B        
<missing>      7 days ago       /bin/sh -c #(nop)  ENV GOPATH=/go               0B        
<missing>      7 days ago       /bin/sh -c set -eux;  apk add --no-cache --v…   309MB     
<missing>      7 days ago       /bin/sh -c #(nop)  ENV GOLANG_VERSION=1.17.6    0B        
<missing>      6 weeks ago      /bin/sh -c #(nop)  ENV PATH=/usr/local/go/bi…   0B        
<missing>      6 weeks ago      /bin/sh -c [ ! -e /etc/nsswitch.conf ] && ec…   17B       
<missing>      6 weeks ago      /bin/sh -c apk add --no-cache ca-certificates   519kB     
<missing>      7 weeks ago      /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B        
<missing>      7 weeks ago      /bin/sh -c #(nop) ADD file:9233f6f2237d79659…   5.59MB    
```

