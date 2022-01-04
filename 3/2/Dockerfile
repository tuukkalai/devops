FROM docker:20.10

WORKDIR /usr/src/app

RUN apk update && apk add git

COPY script.sh .

RUN chmod a+x script.sh .

CMD ./script.sh
