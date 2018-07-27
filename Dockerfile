FROM node:9.11.1
COPY src /app
WORKDIR  /app
EXPOSE 4011
RUN npm install 
CMD npm start 
