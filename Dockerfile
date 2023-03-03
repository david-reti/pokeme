FROM nikolaik/python-nodejs:latest
WORKDIR /app
COPY . /app
RUN npm i
RUN cd backend && pipenv install
CMD ./start.sh