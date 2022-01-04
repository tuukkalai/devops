# 3.2

To build the docker container and run with `/var/run/docker.sock:/var/run/docker.sock` volume

```sh
docker build . -t dind
docker run -it -v /var/run/docker.sock:/var/run/docker.sock dind
```

