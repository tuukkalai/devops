# 3.4. Frontend - Image optimization

```sh
docker images | grep front

front34      1.0       ba842dfe80d7   4 minutes ago    487MB
front34      1.2       2993ad25b4d8   13 hours ago     447MB
```

## Before optimization

[Dockerfile-v1.0](./Dockerfile-v1.0)

```sh
docker image history front34:1.0

IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
c0809ddb1761   8 hours ago   CMD ["serve" "-s" "-l" "5000" "build"]          0B        buildkit.dockerfile.v0
<missing>      8 hours ago   USER frontuser                                  0B        buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c chown frontuser . # buildkit     0B        buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c useradd -m frontuser # buildk…   334kB     buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c npm run build # buildkit         8.68MB    buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c npm install -g serve # buildk…   7.1MB     buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c npm install # buildkit           210MB     buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c apt install -y nodejs # build…   97.6MB    buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c curl -sL https://deb.nodesour…   40.7MB    buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c apt install -y curl # buildkit   16.2MB    buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c apt update # buildkit            32.8MB    buildkit.dockerfile.v0
<missing>      8 hours ago   ENV REACT_APP_BACKEND_URL=http://localhost:8…   0B        buildkit.dockerfile.v0
<missing>      8 hours ago   EXPOSE map[5000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      8 hours ago   COPY ./example-frontend . # buildkit            708kB     buildkit.dockerfile.v0
<missing>      4 days ago    WORKDIR /usr/src/app                            0B        buildkit.dockerfile.v0
<missing>      7 days ago    /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      7 days ago    /bin/sh -c #(nop) ADD file:122ad323412c2e70b…   72.8MB    
```

## After optimization

[Dockerfile-v1.2](./Dockerfile-v1.2)

```sh
docker image history front34:1.2

IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
40bf1cff9aba   8 hours ago   CMD ["serve" "-s" "-l" "5000" "build"]          0B        buildkit.dockerfile.v0
<missing>      8 hours ago   USER frontuser                                  0B        buildkit.dockerfile.v0
<missing>      8 hours ago   RUN /bin/sh -c apt update &&     apt install…   373MB     buildkit.dockerfile.v0
<missing>      8 hours ago   ENV REACT_APP_BACKEND_URL=http://localhost:8…   0B        buildkit.dockerfile.v0
<missing>      8 hours ago   EXPOSE map[5000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      9 hours ago   COPY ./example-frontend . # buildkit            708kB     buildkit.dockerfile.v0
<missing>      4 days ago    WORKDIR /usr/src/app                            0B        buildkit.dockerfile.v0
<missing>      7 days ago    /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      7 days ago    /bin/sh -c #(nop) ADD file:122ad323412c2e70b…   72.8MB    
```

