# 3.6 Part 1

```sh
REPOSITORY                                                    TAG            IMAGE ID       CREATED             SIZE
multi-frontend                                                latest         998a9ed94dcf   7 minutes ago       65.9MB
```

Build container

```sh
docker build . -t multi-frontend
```

Run container

```sh
docker run -it -p 5000 multi-backend
```
