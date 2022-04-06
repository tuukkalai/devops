FROM ubuntu

WORKDIR /usr/src/app

COPY ./example-frontend .
EXPOSE 5000
ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN apt update && \
    apt install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash && \
    apt install -y nodejs && \
    npm install && \
    npm install -g serve && \
    npm run build && \
    apt purge -y --auto-remove curl && \
    rm -rf /var/lib/apt/lists/* && \
    useradd -m frontuser && \
    chown frontuser .

USER frontuser

CMD ["serve", "-s", "-l", "5000", "build"]

