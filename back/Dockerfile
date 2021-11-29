FROM python:3.8
WORKDIR /usr/app
COPY ./requirements.txt .
#install dependencies
RUN pip install -r requirements.txt
#set environment variables
ENV FLASK_ENV=development
ENV FLASK_APP=./src/main.py
#run flask
CMD  ["flask","run","--host=0.0.0.0"]
