FROM python:alpine3.15

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_FRONT_URL=http://localhost:5000
EXPOSE 8080

RUN adduser -D backuser && chown backuser . && \
	pip install --no-cache-dir -r requirements.txt --no-warn-script-location

USER backuser

ENV PATH=$PATH:/home/backuser/.local/bin

CMD ["gunicorn", "-w 4", "-b 0.0.0.0:8080", "app:app"]