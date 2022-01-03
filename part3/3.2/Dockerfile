FROM docker:latest

WORKDIR /var/opt

RUN apk update && apk add git

COPY ./script.sh .

RUN chmod a+x script.sh .

CMD ./script.sh
