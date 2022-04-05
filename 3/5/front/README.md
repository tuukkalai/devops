# Prerequisites

To build Dockerfiles, copy `example-front` from examples to current folder
(same where this README-file is located).

# Different FROMs

```sh
docker images | grep front

front35      alpine    14167ff56f4c   About a minute ago   344MB
front35      node      fe5f2e6a8524   About an hour ago    475MB
front35      ubuntu    40bf1cff9aba   12 hours ago         447MB
```

## FROM node

[Dockerfile.node](./Dockerfile.node)

```sh
docker image history front35:node

IMAGE          CREATED             CREATED BY                                      SIZE      COMMENT
fe5f2e6a8524   About an hour ago   CMD ["serve" "-s" "-l" "5000" "build"]          0B        buildkit.dockerfile.v0
<missing>      About an hour ago   USER frontuser                                  0B        buildkit.dockerfile.v0
<missing>      About an hour ago   RUN /bin/sh -c npm install &&     npm instal…   301MB     buildkit.dockerfile.v0
<missing>      About an hour ago   ENV REACT_APP_BACKEND_URL=http://localhost:8…   0B        buildkit.dockerfile.v0
<missing>      About an hour ago   EXPOSE map[5000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      About an hour ago   COPY ./example-frontend . # buildkit            708kB     buildkit.dockerfile.v0
<missing>      About an hour ago   WORKDIR /usr/src/app                            0B        buildkit.dockerfile.v0
<missing>      3 days ago          /bin/sh -c #(nop)  CMD ["node"]                 0B        
<missing>      3 days ago          /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B        
<missing>      3 days ago          /bin/sh -c #(nop) COPY file:4d192565a7220e13…   388B      
<missing>      3 days ago          /bin/sh -c set -ex   && savedAptMark="$(apt-…   9.4MB     
<missing>      3 days ago          /bin/sh -c #(nop)  ENV YARN_VERSION=1.22.15     0B        
<missing>      3 days ago          /bin/sh -c ARCH= && dpkgArch="$(dpkg --print…   94.6MB    
<missing>      3 days ago          /bin/sh -c #(nop)  ENV NODE_VERSION=16.13.2     0B        
<missing>      3 weeks ago         /bin/sh -c groupadd --gid 1000 node   && use…   333kB     
<missing>      3 weeks ago         /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      3 weeks ago         /bin/sh -c #(nop) ADD file:bd5c9e0e0145fe33b…   69.3MB    
```

## FROM ubuntu

[Dockerfile.ubuntu](./Dockerfile.ubuntu)

```sh
docker image history front35:ubuntu

IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
40bf1cff9aba   12 hours ago   CMD ["serve" "-s" "-l" "5000" "build"]          0B        buildkit.dockerfile.v0
<missing>      12 hours ago   USER frontuser                                  0B        buildkit.dockerfile.v0
<missing>      12 hours ago   RUN /bin/sh -c apt update &&     apt install…   373MB     buildkit.dockerfile.v0
<missing>      12 hours ago   ENV REACT_APP_BACKEND_URL=http://localhost:8…   0B        buildkit.dockerfile.v0
<missing>      12 hours ago   EXPOSE map[5000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      13 hours ago   COPY ./example-frontend . # buildkit            708kB     buildkit.dockerfile.v0
<missing>      4 days ago     WORKDIR /usr/src/app                            0B        buildkit.dockerfile.v0
<missing>      7 days ago     /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      7 days ago     /bin/sh -c #(nop) ADD file:122ad323412c2e70b…   72.8MB    
```

## FROM alpine

[Dockerfile.alpine](./Dockerfile.alpine)

```sh
docker image history front35:alpine

IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
14167ff56f4c   2 minutes ago    CMD ["serve" "-s" "-l" "5000" "build"]          0B        buildkit.dockerfile.v0
<missing>      2 minutes ago    USER frontuser                                  0B        buildkit.dockerfile.v0
<missing>      2 minutes ago    RUN /bin/sh -c npm install &&     npm instal…   226MB     buildkit.dockerfile.v0
<missing>      2 minutes ago    ENV REACT_APP_BACKEND_URL=http://localhost:8…   0B        buildkit.dockerfile.v0
<missing>      2 minutes ago    EXPOSE map[5000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      17 minutes ago   COPY ./example-frontend . # buildkit            708kB     buildkit.dockerfile.v0
<missing>      17 minutes ago   WORKDIR /usr/src/app                            0B        buildkit.dockerfile.v0
<missing>      2 days ago       /bin/sh -c #(nop)  CMD ["node"]                 0B        
<missing>      2 days ago       /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B        
<missing>      2 days ago       /bin/sh -c #(nop) COPY file:4d192565a7220e13…   388B      
<missing>      2 days ago       /bin/sh -c apk add --no-cache --virtual .bui…   7.85MB    
<missing>      2 days ago       /bin/sh -c #(nop)  ENV YARN_VERSION=1.22.15     0B        
<missing>      2 days ago       /bin/sh -c addgroup -g 1000 node     && addu…   104MB     
<missing>      3 days ago       /bin/sh -c #(nop)  ENV NODE_VERSION=14.18.3     0B        
<missing>      7 weeks ago      /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B        
<missing>      7 weeks ago      /bin/sh -c #(nop) ADD file:9233f6f2237d79659…   5.59MB    
```

