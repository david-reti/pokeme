FROM nikolaik/python-nodejs:latest
WORKDIR /app
COPY . /app
RUN npm i && npm i -g serve && npm run build 
RUN cd backend && pipenv install
CMD ./start.sh