FROM python:alpine3.15

WORKDIR /usr/src/app

ENV VIRTUAL_ENV=venv
ENV REACT_APP_FRONT_URL=http://localhost:5000
ENV PATH="$PATH:$VIRTUAL_ENV/bin"

COPY . .

RUN adduser -D backuser && chown backuser .

USER backuser

EXPOSE 8080

RUN python3 -m venv $VIRTUAL_ENV && \
	pip install --no-cache-dir -r requirements.txt --no-warn-script-location

ENV PATH="$PATH:/home/backuser/.local/bin"

CMD ["gunicorn", "-w 4", "-b 0.0.0.0:8080", "app:app"]