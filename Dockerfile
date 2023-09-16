FROM alpine:latest
COPY . /home/app
RUN apk add --no-cache --update nodejs nodejs-npm
RUN cd /home/app \
    && npm install --production
CMD [ "npm" , "run", "start" ]