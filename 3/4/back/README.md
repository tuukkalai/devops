# 3.4 Backend - Image optimization

## Golang

[Dockerfile-v1.0](./Dockerfile-v1.0) starting FROM
[golang:1.16](https://hub.docker.com/layers/golang/library/golang/1.16/images/sha256-69dc7709a694db998d92ce811ee9ceba3b62b09e67d29492b32a08c5fbf1d701?context=explore)

```sh
docker images

back34       1.0       480fb32e7fbc   9 hours ago      1.07GB
```

```sh
docker image history back34:1.0

IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
480fb32e7fbc   About a minute ago   CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      About a minute ago   RUN /bin/sh -c go build # buildkit              146MB     buildkit.dockerfile.v0
<missing>      About a minute ago   USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      About a minute ago   RUN /bin/sh -c useradd -m backuser && chown …   363kB     buildkit.dockerfile.v0
<missing>      About a minute ago   ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      About a minute ago   EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      About a minute ago   COPY . . # buildkit                             29.8kB    buildkit.dockerfile.v0
<missing>      3 days ago           WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      6 days ago           /bin/sh -c #(nop) WORKDIR /go                   0B        
<missing>      6 days ago           /bin/sh -c mkdir -p "$GOPATH/src" "$GOPATH/b…   0B        
<missing>      6 days ago           /bin/sh -c #(nop)  ENV PATH=/go/bin:/usr/loc…   0B        
<missing>      6 days ago           /bin/sh -c #(nop)  ENV GOPATH=/go               0B        
<missing>      6 days ago           /bin/sh -c set -eux;  arch="$(dpkg --print-a…   387MB     
<missing>      6 days ago           /bin/sh -c #(nop)  ENV GOLANG_VERSION=1.16.13   0B        
<missing>      3 weeks ago          /bin/sh -c #(nop)  ENV PATH=/usr/local/go/bi…   0B        
<missing>      3 weeks ago          /bin/sh -c set -eux;  apt-get update;  apt-g…   227MB     
<missing>      3 weeks ago          /bin/sh -c apt-get update && apt-get install…   152MB     
<missing>      3 weeks ago          /bin/sh -c set -ex;  if ! command -v gpg > /…   18.9MB    
<missing>      3 weeks ago          /bin/sh -c set -eux;  apt-get update;  apt-g…   10.7MB    
<missing>      3 weeks ago          /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      3 weeks ago          /bin/sh -c #(nop) ADD file:c03517c5ddbed4053…   124MB     
```

## Ubuntu - before optimization

[Dockerfile-v1.1](./Dockerfile-v1.1) starting FROM [ubuntu:18.04](https://hub.docker.com/layers/ubuntu/library/ubuntu/18.04/images/sha256-81d5a9161533bba27b2fcc6475228ff2348c82f7bb610bcd97880a100f8e4d5c?context=explore)

```sh
docker images

back34       1.1       7c153077b522   20 minutes ago   799MB
```

```sh
docker image history back34:1.1

IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
7c153077b522   2 minutes ago   CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      2 minutes ago   USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c go build # buildkit              146MB     buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c useradd -m backuser # buildkit   398kB     buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c tar -C /usr/local -xzf go1.16…   387MB     buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c curl -sL https://go.dev/dl/go…   129MB     buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c rm -rf /usr/local/go # buildk…   0B        buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c apt install -y curl # buildkit   14.3MB    buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c apt update # buildkit            38.8MB    buildkit.dockerfile.v0
<missing>      2 minutes ago   COPY . . # buildkit                             21MB      buildkit.dockerfile.v0
<missing>      8 hours ago     WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      8 hours ago     ENV PATH=/usr/local/sbin:/usr/local/bin:/usr…   0B        buildkit.dockerfile.v0
<missing>      8 hours ago     ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      8 hours ago     EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      6 days ago      /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      6 days ago      /bin/sh -c #(nop) ADD file:2aa3e79e3cff3c048…   63.1MB    
```

## Ubuntu - after optimization

[Dockerfile-v1.2](./Dockerfile-v1.2) starting FROM [ubuntu:18.04](https://hub.docker.com/layers/ubuntu/library/ubuntu/18.04/images/sha256-81d5a9161533bba27b2fcc6475228ff2348c82f7bb610bcd97880a100f8e4d5c?context=explore)

```sh
docker images

back34       1.2       2cd30b6c9e56   4 minutes ago    602MB
```

```sh
docker image history back34:1.2

IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
2cd30b6c9e56   53 seconds ago       CMD ["/bin/sh" "-c" "./server"]                 0B        buildkit.dockerfile.v0
<missing>      53 seconds ago       USER backuser                                   0B        buildkit.dockerfile.v0
<missing>      53 seconds ago       RUN /bin/sh -c apt update &&     apt install…   539MB     buildkit.dockerfile.v0
<missing>      About a minute ago   COPY . . # buildkit                             28.3kB    buildkit.dockerfile.v0
<missing>      9 hours ago          WORKDIR /go/src/app                             0B        buildkit.dockerfile.v0
<missing>      9 hours ago          ENV PATH=/usr/local/sbin:/usr/local/bin:/usr…   0B        buildkit.dockerfile.v0
<missing>      9 hours ago          ENV REQUEST_ORIGIN=http://localhost:5000        0B        buildkit.dockerfile.v0
<missing>      9 hours ago          EXPOSE map[8080/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      6 days ago           /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      6 days ago           /bin/sh -c #(nop) ADD file:2aa3e79e3cff3c048…   63.1MB    
```

