FROM alpine:latest
RUN apk add --no-cache nodejs nodejs-npm
COPY . /home/app
RUN cd /home/app \
    && npm install --production
CMD [ "node" , "bin/www" ]