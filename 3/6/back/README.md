# 3.6 Part 2

```sh
REPOSITORY                                                    TAG            IMAGE ID       CREATED             SIZE
multi-backend                                                 latest         672da210a867   57 minutes ago      18MB
```

Build container

```sh
docker build . -t multi-backend
```

Run container

```sh
docker run -it -p 8080 multi-backend
```
