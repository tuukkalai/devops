# 3.1

## Link to the repo

[ts-dev-env](https://github.com/tuukkalai/ts-dev-env). Added as a submodule.

The
[config](https://github.com/tuukkalai/ts-dev-env/blob/main/.github/workflows/build.yml)
is located in the root of the repo and copy of it added also below.

```yml
name: Build and push ts-dev-env with Docker

on:
  push:
    branches:
      - 'main'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
      -
        name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      -
        name: Build and push
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: tuukkala/ts-dev-env:latest
      -
        name: Deploy to Heroku
        uses: AkhileshNS/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: 'ts-dev-env'
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
```

