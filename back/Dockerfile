FROM python:3.8
WORKDIR /usr/app
COPY ./requirements.txt .
#update python
RUN pip install --upgrade pip
#install dependencies
RUN pip install mysql-connector-python
RUN pip install -U flask-cors
RUN pip install -r requirements.txt
#set environment variables
ENV FLASK_ENV=development
ENV FLASK_APP=./src/main.py
#run flask
CMD  ["flask","run","--host=0.0.0.0"]
