docker file FROM  node:latest
WORKDIR /dockerApp
COPY . /dockerApp/
RUN npm install

EXPOSE 8080


CMD [ "node","index.js" ]