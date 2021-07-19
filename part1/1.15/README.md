# 1.15 : Homework

Docker image: [tuukkala/headmaker](https://hub.docker.com/r/tuukkala/headmaker)

## What does it do?

It asks couple of simple questions about the head that it creates. After questions the head figure is drawn.

## How does it do it?

Pull the Docker image

```sh
> docker pull tuukkala/headmaker:1.0
```

Start the program as local container

```sh
> docker run -it tuukkala/headmaker:1.0
```

## Under the hood

[Lightweight Alpine](https://hub.docker.com/frolvlad/alpine-gxx) with C compiler and simple C++ program.

