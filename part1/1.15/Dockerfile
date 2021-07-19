FROM frolvlad/alpine-gxx

WORKDIR /headmaker
COPY /headmaker .

RUN g++ fns.cpp headmaker.cpp -o headmaker.out

CMD ["./headmaker.out"]
